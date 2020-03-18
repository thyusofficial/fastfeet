import * as Yup from 'yup';
import { Op } from 'sequelize';
import Delivery from '../models/Delivery';
import DeliveryMen from '../models/DeliveryMen';
import Recipient from '../models/Recipient';
import File from '../models/File';

import RegisterDeliveryMail from '../jobs/RegisterDeliveryMail';
import Queue from '../../lib/Queue';

class DeliveryController {
  async index(req, res) {
    const prodName = req.query.q;

    if (prodName) {
      const delivery = await Delivery.findAll({
        where: {
          product: {
            [Op.like]: `%${prodName}%`,
          },
        },
        include: [
          {
            model: DeliveryMen,
            as: 'deliveryman',
            attributes: ['name'],
            include: [{ model: File, as: 'avatar' }],
          },
          {
            model: Recipient,
            as: 'recipient',
            attributes: [
              'name',
              'city',
              'state',
              'street',
              'number',
              'zip_code',
            ],
          },
          { model: File, as: 'signature', attributes: ['name', 'path', 'url'] },
        ],
      });

      if (delivery.length <= 0) {
        return res.status(400).json({ error: 'Delivery not found.' });
      }

      return res.json(delivery);
    }
    const delivery = await Delivery.findAll({
      include: [
        {
          model: DeliveryMen,
          as: 'deliveryman',
          include: [{ model: File, as: 'avatar' }],
        },
        {
          model: Recipient,
          as: 'recipient',
          attributes: ['name', 'city', 'state', 'street', 'number', 'zip_code'],
        },
        { model: File, as: 'signature', attributes: ['name', 'path', 'url'] },
      ],
    });

    return res.json(delivery);
  }

  async show(req, res) {
    const { id } = req.params;
    const delivery = await Delivery.findByPk(id, {
      include: [
        {
          model: DeliveryMen,
          as: 'deliveryman',
          attributes: ['id', 'name'],
          include: [{ model: File, as: 'avatar' }],
        },
        {
          model: Recipient,
          as: 'recipient',
          attributes: [
            'id',
            'name',
            'city',
            'state',
            'street',
            'number',
            'zip_code',
          ],
        },
        { model: File, as: 'signature', attributes: ['name', 'path', 'url'] },
      ],
    });

    if (!delivery) {
      return res.status(400).json({ error: 'Delivery not found.' });
    }
    return res.json(delivery);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      recipient_id: Yup.number().required(),
      deliveryman_id: Yup.number().required(),
      product: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const { recipient_id, deliveryman_id, product } = await Delivery.create(
      req.body
    );

    const deliveryman = await DeliveryMen.findByPk(deliveryman_id);

    await Queue.add(RegisterDeliveryMail.key, {
      deliveryman,
      product,
    });

    return res.json({ recipient_id, deliveryman_id, product });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      recipient_id: Yup.number().required(),
      deliveryman_id: Yup.number().required(),
      product: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }
    const { id } = req.params;
    const delivery = await Delivery.findByPk(id);

    if (!delivery) {
      return res.status(400).json({ error: 'Delivery not found.' });
    }

    await delivery.update(req.body);

    return res.json(delivery);
  }

  async delete(req, res) {
    const { id } = req.params;

    const delivery = await Delivery.findByPk(id);

    await delivery.destroy();

    return res.json(delivery);
  }
}

export default new DeliveryController();
