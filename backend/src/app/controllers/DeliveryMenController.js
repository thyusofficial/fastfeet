import * as Yup from 'yup';
import { Op } from 'sequelize';
import DeliveryMen from '../models/DeliveryMen';
import File from '../models/File';

class DeliverymenController {
  async index(req, res) {
    const deliverymanName = req.query.q;

    if (deliverymanName) {
      const deliveryman = await DeliveryMen.findAll({
        where: {
          name: {
            [Op.like]: `%${deliverymanName}%`,
          },
        },
        include: [
          {
            model: File,
            as: 'avatar',
            attributes: ['name', 'path', 'url'],
          },
        ],
      });

      if (deliveryman.length <= 0) {
        return res.status(400).json({ error: 'Deliveryman not found.' });
      }

      return res.json(deliveryman);
    }
    const deliveryman = await DeliveryMen.findAll({
      include: [
        { model: File, as: 'avatar', attributes: ['name', 'path', 'url'] },
      ],
    });

    return res.json(deliveryman);
  }

  async show(req, res) {
    const { id } = req.params;

    const deliveryman = await DeliveryMen.findByPk(id, {
      attributes: ['id', 'name', 'email', 'created_at'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman not found.' });
    }

    return res.json(deliveryman);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      avatar_id: Yup.string().notRequired(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { name, email, avatar_id } = req.body;

    const deliverymenExists = await DeliveryMen.findOne({
      where: { email },
    });

    if (deliverymenExists) {
      return res.status(400).json({ error: 'Deliveryman already exists.' });
    }

    const { id } = await DeliveryMen.create({ name, email, avatar_id });

    return res.json({ id, name, email, avatar_id });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      avatar_id: Yup.number().notRequired(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id } = req.params;
    const { name, email, avatar_id } = req.body;

    const deliveryman = await DeliveryMen.findByPk(id);

    if (email && email !== deliveryman.email) {
      const deliverymanExists = await DeliveryMen.findOne({
        where: { email },
      });

      if (deliverymanExists) {
        return res.status(400).json({ error: 'Deliveryman already exists.' });
      }
    }

    await deliveryman.update({ name, email, avatar_id });

    const { avatar } = await DeliveryMen.findByPk(id, {
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json({ email, name, avatar });
  }

  async delete(req, res) {
    const { id } = req.params;

    const deliveryman = await DeliveryMen.findByPk(id);

    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman not found.' });
    }

    deliveryman.destroy(id);

    return res.json();
  }
}

export default new DeliverymenController();
