import React, { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import { MdAdd, MdSearch } from 'react-icons/md';

import HeaderList from '~/components/HeaderList';
import Button from '~/components/Button';
import DeliveryMore from '~/components/DeliveryMore';

import {
  Container,
  Content,
  MainForm,
  FormInput,
  Table,
  Status,
} from './styles';

import api from '~/services/api';
import history from '~/services/history';

export default function Delivery() {
  const [deliveries, setDeliveries] = useState([]);

  function formatStatus(delivery) {
    let status = {};

    if (delivery.canceled_at) {
      status = { text: 'cancelada', color: '#DE3B3B' };
      return status;
    }
    if (delivery.end_date) {
      status = { text: 'entregue', color: '#2CA42B' };
      return status;
    }
    if (delivery.start_date) {
      status = { text: 'retirada', color: '#4D85EE' };
      return status;
    }
    status = { text: 'pendente', color: '#C1BC35' };

    return status;
  }

  function formatDate(delivery) {
    return {
      startDateFormatted: delivery.start_date
        ? format(parseISO(delivery.start_date), 'dd/MM/yyyy')
        : null,
      endDateFormatted: delivery.end_date
        ? format(parseISO(delivery.end_date), 'dd/MM/yyyy')
        : null,
    };
  }

  async function handleSubmit({ product }) {
    const response = await api.get('/deliveries', {
      params: {
        q: product,
      },
    });

    const data = response.data.map(d => {
      return {
        ...d,
        statusFormatted: formatStatus(d),
      };
    });

    setDeliveries(data);
  }

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get('deliveries');

      const data = response.data.map(d => {
        return {
          ...d,
          statusFormatted: formatStatus(d),
          datesFormatted: formatDate(d),
        };
      });
      setDeliveries(data);
    }

    loadDeliveries();
  }, []);

  return (
    <Container>
      <Content>
        <HeaderList title="Gerenciando encomendas">
          <div>
            <MainForm onSubmit={handleSubmit}>
              <MdSearch size={20} />
              <FormInput
                type="text"
                name="product"
                placeholder="Procurar por encomenda"
              />
            </MainForm>
            <Button
              type="button"
              background="#7D40E7"
              onClick={() => {
                history.push('/deliveries/create');
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
              <th>Destinatário</th>
              <th>Entregador</th>
              <th>Cidade</th>
              <th>Estado</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {deliveries.map(delivery => (
              <tr key={delivery.id}>
                <td>{delivery.id}</td>

                <td>{delivery.recipient.name}</td>

                <td>
                  <div>
                    <img
                      src={
                        delivery.deliveryman.avatar
                          ? delivery.deliveryman.avatar.url
                          : `https://api.adorable.io/avatars/286/${delivery.deliveryman.name}.png`
                      }
                      alt=""
                      srcSet=""
                    />
                    {delivery.deliveryman.name}
                  </div>
                </td>

                <td>{delivery.recipient.city}</td>

                <td>{delivery.recipient.state}</td>

                <td>
                  <Status status={delivery.statusFormatted}>
                    {delivery.statusFormatted.text}
                  </Status>
                </td>

                <td>
                  <DeliveryMore visualize edit remove delivery={delivery} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Content>
    </Container>
  );
}
