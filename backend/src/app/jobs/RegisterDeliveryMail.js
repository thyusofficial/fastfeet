import Mail from '../../lib/Mail';

class RegisterDeliveryMail {
  get key() {
    return 'RegisterDeliveryMail';
  }

  async handle({ data }) {
    const { deliveryman, product } = data;

    await Mail.sendMail({
      to: `${deliveryman.name} <${deliveryman.email}>`,
      subject: 'Encomenda cadastrada',
      template: 'deliveryRegister',
      context: {
        deliveryman: deliveryman.name,
        product,
      },
    });
  }
}

export default new RegisterDeliveryMail();
