import { Op } from 'sequelize';
import Delivery from '../models/Delivery';
import Recipient from '../models/Recipient';

class DeliverymanUndeliveredController {
  async index(req, res) {
    const { id } = req.params;

    const delivered = await Delivery.findAll({
      where: {
        deliveryman_id: id,
        end_date: {
          [Op.not]: null,
        },
      },
      include: [
        {
          model: Recipient,
          as: 'recipient',
          attributes: ['name', 'city', 'state', 'street', 'number', 'zip_code'],
        },
      ],
    });

    return res.json(delivered);
  }
}

export default new DeliverymanUndeliveredController();
