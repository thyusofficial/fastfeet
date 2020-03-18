import React, { useRef, useEffect } from 'react';
import { toast } from 'react-toastify';

import { MdChevronLeft, MdDone } from 'react-icons/md';
import * as Yup from 'yup';
import AsyncSelect from '~/components/AsyncSelect';
import Button from '~/components/Button';
import HeaderForm from '~/components/HeaderForm';

import { Container, Content, MainForm, FormInput } from './styles';

import api from '~/services/api';
import history from '~/services/history';

export default function DeliveryCreate({ match }) {
  const { id } = match.params;

  const formRef = useRef(null);

  useEffect(() => {
    async function loadDelivery() {
      const response = await api.get(`/deliveries/${id}`);

      formRef.current.setData(response.data);

      formRef.current.setFieldValue('recipient_id', {
        value: response.data.recipient.id,
        label: response.data.recipient.name,
      });
      formRef.current.setFieldValue('deliveryman_id', {
        value: response.data.deliveryman.id,
        label: response.data.deliveryman.name,
      });
    }

    loadDelivery();
  }, [id]);

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
      // Validation passed
      await api.put(`/deliveries/${id}`, {
        recipient_id: data.recipient_id,
        deliveryman_id: data.deliveryman_id,
        product: data.product,
      });
      history.push('/deliveries');
      toast.success('Encomenda editada com sucesso!');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        // Validation failed
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
