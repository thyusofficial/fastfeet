import * as Yup from 'yup';
import { Op } from 'sequelize';
import { startOfDay, endOfDay } from 'date-fns';
import Delivery from '../models/Delivery';
import Recipient from '../models/Recipient';
import DeliveryMen from '../models/DeliveryMen';

class DeliverymanUndeliveredController {
  async index(req, res) {
    const { id } = req.params;

    const undelivered = await Delivery.findAll({
      where: {
        deliveryman_id: id,
        [Op.and]: [{ canceled_at: null }, { end_date: null }],
      },
      include: [
        {
          model: Recipient,
          as: 'recipient',
          attributes: ['name', 'city', 'state', 'street', 'number', 'zip_code'],
        },
      ],
    });

    return res.json(undelivered);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      deliveryman_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const { id } = req.params;
    const { deliveryman_id } = req.body;

    const deliveryman = await DeliveryMen.findByPk(deliveryman_id);

    const delivery = await Delivery.findByPk(id);

    if (!deliveryman || !delivery) {
      return res
        .status(400)
        .json({ error: 'Delivery or deliveryman not found' });
    }

    if (delivery.deliveryman_id !== deliveryman.id) {
      return res
        .status(400)
        .json({ error: 'This delivery belongs to other deliveryman' });
    }

    if (delivery.start_date || delivery.end_date || delivery.canceled_at) {
      return res.status(400).json({ error: 'Delivery canot be started' });
    }

    const todayDate = new Date();

    const withdraws = await Delivery.findAll({
      where: {
        deliveryman_id,
        canceled_at: null,
        start_date: {
          [Op.between]: [startOfDay(todayDate), endOfDay(todayDate)],
        },
      },
    });
    if (withdraws.length >= 5) {
      return res.status(400).json({ error: 'Delivery limit reached' });
    }

    delivery.start_date = new Date();
    await delivery.save();

    return res.json(delivery);
  }

  async delete(req, res) {
    const schema = Yup.object().shape({
      deliveryman_id: Yup.number().required(),
      signature_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const { id } = req.params;
    const { deliveryman_id, signature_id } = req.body;

    const deliveryman = await DeliveryMen.findByPk(deliveryman_id);

    const delivery = await Delivery.findByPk(id);

    if (!deliveryman || !delivery) {
      return res
        .status(400)
        .json({ error: 'Delivery or deliveryman not found' });
    }

    if (delivery.deliveryman_id !== deliveryman.id) {
      return res
        .status(400)
        .json({ error: 'This delivery belongs to other deliveryman' });
    }

    if (delivery.signature_id || delivery.end_date || delivery.canceled_at) {
      return res
        .status(400)
        .json({ error: 'Delivery already delivered or canceled' });
    }

    await delivery.update({
      end_date: new Date(),
      signature_id,
    });

    return res.json(delivery);
  }
}

export default new DeliverymanUndeliveredController();
