import React, { useRef } from 'react';
import { toast } from 'react-toastify';

import { MdChevronLeft, MdDone } from 'react-icons/md';
import * as Yup from 'yup';
import AsyncSelect from '~/components/AsyncSelect';
import Button from '~/components/Button';
import HeaderForm from '~/components/HeaderForm';

import { Container, Content, MainForm, FormInput } from './styles';

import api from '~/services/api';
import history from '~/services/history';

export default function DeliveryCreate() {
  const formRef = useRef(null);

  async function loadRecipient(inputValue, callback) {
    const response = await api.get('/recipients', {
      params: {
        q: inputValue,
      },
    });

    const data = response.data.map(recipient => ({
      value: recipient.id,
      label: recipient.name,
    }));

    callback(data);
  }

  async function loadDeliveryman(inputValue, callback) {
    const response = await api.get('/deliverymen', {
      params: {
        q: inputValue,
      },
    });

    const data = response.data.map(deliveryman => ({
      value: deliveryman.id,
      label: deliveryman.name,
    }));

    callback(data);
  }

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        recipient_id: Yup.string().required('Insira um destinatário'),
        deliveryman_id: Yup.string().required('Insira um entregador'),
        product: Yup.string().required('Insira o nome do produto'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      await api.post('/deliveries', {
        recipient_id: data.recipient_id,
        deliveryman_id: data.deliveryman_id,
        product: data.product,
      });
      history.push('/deliveries');
      toast.success('Encomenda cadastrada com sucesso!');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        console.tron.log(err);
        err.errors.map(error => {
          return toast.error(error);
        });
      }
    }
  }

  return (
    <Container>
      <Content>
        <HeaderForm title="Cadastro de encomendas">
          <Button
            type="button"
            background="#cccccc"
            onClick={() => {
              history.push('/deliveries');
            }}
          >
            <MdChevronLeft size={20} color="#fff" />
            Voltar
          </Button>

          <Button
            type="submit"
            background="#7D40E7"
            onClick={() => formRef.current.submitForm()}
          >
            <MdDone size={20} color="#fff" />
            Salvar
          </Button>
        </HeaderForm>

        <MainForm ref={formRef} onSubmit={handleSubmit}>
          <section>
            <AsyncSelect
              type="text"
              label="Destinatário"
              name="recipient_id"
              noOptionsMessage={() => 'Nenhum destinatário encontrado'}
              loadOptions={loadRecipient}
            />
            <AsyncSelect
              type="text"
              label="Entregador"
              name="deliveryman_id"
              noOptionsMessage={() => 'Nenhum entregador encontrado'}
              loadOptions={loadDeliveryman}
            />
          </section>
          <FormInput
            name="product"
            label="Nome do produto"
            type="text"
            onKeyPress={e =>
              e.key === 'Enter' ? formRef.current.submitForm() : null
            }
          />
        </MainForm>
      </Content>
    </Container>
  );
}
