import React, { useEffect, useState } from 'react';
import { MdAdd, MdSearch } from 'react-icons/md';

import HeaderList from '~/components/HeaderList';
import Button from '~/components/Button';
import DeliverymanMore from '~/components/DeliverymanMore';

import { Container, Content, MainForm, FormInput, Table } from './styles';

import api from '~/services/api';
import history from '~/services/history';

export default function Delivery() {
  const [deliverymen, setDeliverymen] = useState([]);

  async function handleSubmit({ deliveryman }) {
    const response = await api.get('/deliverymen', {
      params: {
        q: deliveryman,
      },
    });

    const data = response.data.map(d => {
      return {
        ...d,
      };
    });

    setDeliverymen(data);
  }

  useEffect(() => {
    async function loadDeliverymen() {
      const response = await api.get('/deliverymen');
      const { data } = response;
      setDeliverymen(data);
    }

    loadDeliverymen();
  }, []);

  return (
    <Container>
      <Content>
        <HeaderList title="Gerenciando entregadores">
          <div>
            <MainForm onSubmit={handleSubmit}>
              <MdSearch size={20} />
              <FormInput
                type="text"
                name="deliveryman"
                placeholder="Buscar por entregadores"
              />
            </MainForm>
            <Button
              type="button"
              background="#7D40E7"
              onClick={() => {
                history.push('/deliverymen/create');
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
              <th>Foto</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {deliverymen.map(deliveryman => (
              <tr key={deliveryman.id}>
                <td>{deliveryman.id}</td>
                <td>
                  <img
                    src={
                      deliveryman.avatar
                        ? deliveryman.avatar.url
                        : `https://api.adorable.io/avatars/286/${deliveryman.name}.png`
                    }
                    alt=""
                  />
                </td>
                <td>{deliveryman.name}</td>
                <td>{deliveryman.email}</td>
                <td>
                  <DeliverymanMore deliveryman={deliveryman} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Content>
    </Container>
  );
}
