import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdRemoveRedEye } from 'react-icons/md';

import { Container, DeliveryModal } from './styles';

export default function ProblemModal({ problem }) {
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
          <strong>Visualizar problema:</strong>
          <p>{problem.description}</p>
        </div>
      </DeliveryModal>
    </Container>
  );
}

ProblemModal.propTypes = {
  problem: PropTypes.object,
};
