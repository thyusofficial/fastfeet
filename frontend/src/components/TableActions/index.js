import React, { useState } from 'react';
import { MdMoreHoriz, MdModeEdit } from 'react-icons/md';

import { toast } from 'react-toastify';
import Modal from '~/components/Modal';
import { Container, Badge, ActionList, Action } from './styles';
import api from '~/services/api';
import history from '~/services/history';

export default function TableActions({ visualize, edit, remove, delivery }) {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  async function handleDelete(deliveryId) {
    const confirm = window.confirm('Você quer mesmo excluir esta encomenda?');

    if (confirm) {
      try {
        await api.delete(`/deliveries/${deliveryId}`);
        toast.success('Encomenda excluida com sucesso!');
      } catch (err) {
        toast.error('A encomenda não pode ser excluida!');
      }
    }
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible}>
        <MdMoreHoriz size={20} />
      </Badge>

      <ActionList visible={visible}>
        {visualize ? <Modal delivery={delivery} /> : null}
        {edit ? (
          <Action onClick={() => history.push(`deliveries/${delivery.id}`)}>
            <MdModeEdit size={20} color="#4D85EE" />
            Editar
          </Action>
        ) : null}
        {remove ? (
          <Action
            onClick={() => {
              handleDelete(delivery.id);
            }}
          >
            <MdModeEdit size={20} color="#DE3B3B" />
            Excluir
          </Action>
        ) : null}
      </ActionList>
    </Container>
  );
}
