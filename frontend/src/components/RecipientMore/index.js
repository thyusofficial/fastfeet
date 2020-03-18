import React, { useState } from 'react';
import { MdMoreHoriz, MdModeEdit } from 'react-icons/md';

import { toast } from 'react-toastify';
import { Container, Badge, ActionList, Action } from './styles';
import api from '~/services/api';
import history from '~/services/history';

export default function RecipientMore({ recipient }) {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  async function handleDelete(recipientId) {
    const confirm = window.confirm(
      'Você quer mesmo excluir este destinatário?'
    );

    if (confirm) {
      try {
        await api.delete(`/recipients/${recipientId}`);
        toast.success('Destinatário excluido com sucesso!');
      } catch (err) {
        toast.error('O destinatário não pode ser excluido!');
      }
    }
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible}>
        <MdMoreHoriz size={20} />
      </Badge>

      <ActionList visible={visible}>
        <Action onClick={() => history.push(`recipients/${recipient.id}`)}>
          <MdModeEdit size={20} color="#4D85EE" />
          Editar
        </Action>
        <Action
          onClick={() => {
            handleDelete(recipient.id);
          }}
        >
          <MdModeEdit size={20} color="#DE3B3B" />
          Excluir
        </Action>
      </ActionList>
    </Container>
  );
}
