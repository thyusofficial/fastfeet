import React, { useRef } from 'react';
import { toast } from 'react-toastify';

import { MdChevronLeft, MdDone } from 'react-icons/md';
import * as Yup from 'yup';
import Button from '~/components/Button';
import HeaderForm from '~/components/HeaderForm';

import AvatarInput from './AvatarInput';
import { Container, Content, MainForm, FormInput } from './styles';

import api from '~/services/api';
import history from '~/services/history';

export default function DeliveryCreate() {
  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Insira um nome'),
        email: Yup.string()
          .email('Insira um e-mail válido')
          .required('Insira um e-mail'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });

      const dataFile = new FormData();

      dataFile.append('file', data.avatar);

      const responseFile = data.avatar
				? await api.post('files', dataFile)
				: null;

        await api.post('/deliverymen', {
					name: data.name,
					email: data.email,
					avatar_id: responseFile?.data?.id,
				});


      history.push('/deliverymen');
      toast.success('Entregador criado com sucesso!');


    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        err.errors.map(error => {
          return toast.error(error);
        });
      }
    }
  }

  return (
    <Container>
      <Content>
        <HeaderForm title="Cadastro de entregadores">
          <Button
            type="button"
            background="#cccccc"
            onClick={() => {
              history.push('/deliverymen');
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
          <AvatarInput name="avatar" />
          <FormInput name="name" label="Nome" />
          <FormInput
          name="email"
          label="Email" type="email"
          onKeyPress={e=>e.key === 'Enter' ? formRef.current.submitForm() :null}/>
        </MainForm>
      </Content>
    </Container>
  );
}
