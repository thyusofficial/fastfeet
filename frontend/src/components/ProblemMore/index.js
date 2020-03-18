import React, { useState } from 'react';
import { MdMoreHoriz, MdDeleteForever } from 'react-icons/md';

import { toast } from 'react-toastify';
import ProblemModal from '~/components/ProblemModal';
import { Container, Badge, ActionList, Action } from './styles';
import api from '~/services/api';
import history from '~/services/history';

export default function DeliveryMore({ problem }) {
  const [visible, setVisible] = useState(false);
  console.tron.log(problem);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  async function handleDelete(deliveryId) {
    const confirm = window.confirm('Você quer mesmo cancelar esta encomenda?');

    if (confirm) {
      try {
        await api.delete(`/problem/${deliveryId}/cancel`);

        history.push('/problems');
        toast.success('Encomenda cancelada com sucesso!');
      } catch (err) {
        toast.error('A encomenda não pode ser cancelada!');
      }
    }
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible}>
        <MdMoreHoriz size={20} />
      </Badge>

      <ActionList visible={visible}>
        <ProblemModal problem={problem} />

        <Action
          onClick={() => {
            handleDelete(problem.id);
          }}
        >
          <MdDeleteForever size={20} color="#DE3B3B" />
          Cancelar encomenda
        </Action>
      </ActionList>
    </Container>
  );
}
