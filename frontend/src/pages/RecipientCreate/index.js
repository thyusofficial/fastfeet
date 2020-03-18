import React, { useRef } from 'react';

import { MdChevronLeft, MdDone } from 'react-icons/md';
import InputMask from 'react-input-mask';

import * as Yup from 'yup';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import Button from '~/components/Button';
import HeaderForm from '~/components/HeaderForm';

import { Container, Content, MainForm, FormInput } from './styles';

export default function RecipientCreate() {
  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        street: Yup.string().required('A rua é obrigatória'),
        number: Yup.string().required('O número é obrigatório'),
        complement: Yup.string().notRequired(),
        city: Yup.string().required('A cidade é obrigatória'),
        state: Yup.string().required('O estado é obrigatório'),
        zip_code: Yup.string().required('O cep é obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post('/recipients', {
        name: data.name,
        street: data.street,
        number: data.number,
        complement: data?.complement,
        city: data.city,
        state: data.state,
        zip_code: data.zip_code
      })

      history.push('/recipients');
      toast.success('Destinatário cadastrado com sucesso!');

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
        <HeaderForm title="Cadastro de destinatário">
          <Button
            type="button"
            background="#cccccc"
            onClick={() => {
              history.push('/recipients');
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
          <FormInput type="text" name="name" label="Nome" />
          <div>
            <FormInput type="text" name="street" label="Rua" />
            <FormInput type="text" name="number" label="Número" />
            <FormInput type="text" name="complement" label="Complemento" />
          </div>

          <div>
            <FormInput type="text" name="city" label="Cidade" />
            <FormInput type="text" name="state" label="Estado" />
            <InputMask mask="99999-999" >
              {() => <FormInput type="text" name="zip_code" label="CEP" />}
            </InputMask>
          </div>
        </MainForm>
      </Content>
    </Container>
  );
}
