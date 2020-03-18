import React, { useState } from 'react';
import { MdMoreHoriz, MdModeEdit } from 'react-icons/md';

import { toast } from 'react-toastify';
import { Container, Badge, ActionList, Action } from './styles';
import api from '~/services/api';
import history from '~/services/history';

export default function DeliverymanMore({ deliveryman }) {
  console.tron.log(deliveryman);
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  async function handleDelete(deliverymanId) {
    const confirm = window.confirm('Você quer mesmo excluir este entregador?');

    if (confirm) {
      try {
        await api.delete(`/deliverymen/${deliverymanId}`);
        toast.success('Entregador excluido com sucesso!');
      } catch (err) {
        toast.error('O entregador não pode ser excluido!');
      }
    }
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible}>
        <MdMoreHoriz size={20} />
      </Badge>

      <ActionList visible={visible}>
        <Action onClick={() => history.push(`deliverymen/${deliveryman.id}`)}>
          <MdModeEdit size={20} color="#4D85EE" />
          Editar
        </Action>
        <Action
          onClick={() => {
            handleDelete(deliveryman.id);
          }}
        >
          <MdModeEdit size={20} color="#DE3B3B" />
          Excluir
        </Action>
      </ActionList>
    </Container>
  );
}
