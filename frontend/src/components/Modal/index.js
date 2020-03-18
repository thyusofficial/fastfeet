import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdRemoveRedEye } from 'react-icons/md';

import { Container, DeliveryModal } from './styles';

export default function Modal({ delivery }) {
  const [visible, setVisible] = useState(false);

  function handleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <button type="button" onClick={handleVisible}>
        <MdRemoveRedEye size={20} color="#8E5BE8" />
        Visualizar
      </button>
      <DeliveryModal isOpen={visible} onRequestClose={handleVisible}>
        <div>
          <strong>Informações da encomenda:</strong>
          <span>
            {delivery.recipient.street}, {delivery.recipient.number}
          </span>
          <span>
            {delivery.recipient.city} - {delivery.recipient.state}
          </span>
          <span>{delivery.recipient.zip_code}</span>
        </div>
        <hr />
        <div>
          <strong>Datas</strong>
          <span className="dates">
            <strong>Retirada:</strong>{' '}
            {delivery.datesFormatted.startDateFormatted}
          </span>
          <span className="dates">
            <strong>Entrega:</strong> {delivery.datesFormatted.endDateFormatted}
          </span>
        </div>
        <hr />
        <div>
          <strong>Assinatura do destinatário</strong>
          {delivery.signature ? (
            <img
              src={delivery.signature.url}
              alt="Assinatura do destinatário"
            />
          ) : null}
        </div>
      </DeliveryModal>
    </Container>
  );
}

Modal.propTypes = {
  delivery: PropTypes.object,
};
