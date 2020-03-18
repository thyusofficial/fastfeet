import React, { useEffect, useState } from 'react';
import { MdAdd, MdSearch } from 'react-icons/md';

import HeaderList from '~/components/HeaderList';
import Button from '~/components/Button';
import RecipientMore from '~/components/RecipientMore';

import { Container, Content, MainForm, FormInput, Table } from './styles';

import api from '~/services/api';
import history from '~/services/history';

export default function Delivery() {
  const [recipients, setRecipients] = useState([]);

  async function handleSubmit({ recipient }) {
    const response = await api.get('/recipients', {
      params: {
        q: recipient,
      },
    });

    const data = response.data.map(d => {
      return {
        ...d,
      };
    });

    setRecipients(data);
  }

  useEffect(() => {
    async function loadDeliverymen() {
      const response = await api.get('/recipients');
      const { data } = response;
      setRecipients(data);
    }

    loadDeliverymen();
  }, []);

  return (
    <Container>
      <Content>
        <HeaderList title="Gerenciando destinatários">
          <div>
            <MainForm onSubmit={handleSubmit}>
              <MdSearch size={20} />
              <FormInput
                type="text"
                name="deliveryman"
                placeholder="Buscar por destinatários"
              />
            </MainForm>
            <Button
              type="button"
              background="#7D40E7"
              onClick={() => {
                history.push('/recipients/create');
              }}
            >
              <MdAdd size={20} color="#fff" />
              Cadastrar
            </Button>
          </div>
        </HeaderList>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Endereço</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {recipients.map(recipient => (
              <tr key={recipient.id}>
                <td>{recipient.id}</td>
                <td>{recipient.name}</td>
                <td>
                  {recipient.street}, {recipient.number}, {recipient.city} -
                  {recipient.state}
                </td>
                <td>
                  <RecipientMore recipient={recipient} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Content>
    </Container>
  );
}
