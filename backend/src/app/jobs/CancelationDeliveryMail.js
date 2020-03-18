import Mail from '../../lib/Mail';

class CancelationDeliveryMail {
  get key() {
    return 'CancelationDeliveryMail';
  }

  async handle({ data }) {
    const { name, email } = data.delivery.DeliveryMen;
    const { product } = data.delivery;
    const { description } = data.deliveryProblem;

    await Mail.sendMail({
      to: `${name} <${email}>`,
      subject: 'Encomenda cancelada',
      template: 'deliveryCancelation',
      context: {
        deliveryman: name,
        product,
        description,
      },
    });
  }
}

export default new CancelationDeliveryMail();
