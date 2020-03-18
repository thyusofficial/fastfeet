import * as Yup from 'yup';
import DeliveryProblem from '../models/DeliveryProblem';
import Delivery from '../models/Delivery';

import Queue from '../../lib/Queue';
import CancelationDeliveryMail from '../jobs/CancelationDeliveryMail';
import DeliveryMen from '../models/DeliveryMen';

class DeliveryProblemController {
  async index(req, res) {
    const deiveries = await DeliveryProblem.findAll();

    return res.json(deiveries);
  }

  async show(req, res) {
    const { id } = req.params;
    const delivery = await DeliveryProblem.findAll({
      where: {
        delivery_id: id,
      },
    });

    if (!delivery) {
      return res
        .status(400)
        .json({ error: 'Delivery does not have problems or exists' });
    }

    return res.json(delivery);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      description: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const { id } = req.params;
    const delivery = await Delivery.findByPk(id);

    if (!delivery) {
      return res.status(400).json({ error: 'Delivery not found.' });
    }

    if (delivery.end_date || delivery.canceled_at) {
      return res
        .status(400)
        .json({ error: 'Delivery already ended or canceled.' });
    }

    await DeliveryProblem.create({
      delivery_id: id,
      description: req.body.description,
    });

    return res.json({ ok: true });
  }

  async delete(req, res) {
    const { id } = req.params;

    const deliveryProblem = await DeliveryProblem.findByPk(id);

    if (!deliveryProblem) {
      return res.status(400).json({ error: 'Delivery problem not found' });
    }

    const delivery = await Delivery.findOne({
      where: {
        id: deliveryProblem.delivery_id,
      },
      include: [
        {
          model: DeliveryMen,
          attributes: ['name', 'email'],
        },
      ],
    });

    if (delivery.canceled_at) {
      return res.status(400).json({ error: 'Delivery already canceled.' });
    }

    delivery.canceled_at = new Date();
    await delivery.save();

    Queue.add(CancelationDeliveryMail.key, {
      delivery,
      deliveryProblem,
    });

    return res.json(delivery);
  }
}

export default new DeliveryProblemController();
