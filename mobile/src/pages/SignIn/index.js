import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Image, StatusBar } from 'react-native';
import { Form } from '@unform/mobile';
import { Background, Container, TextInput, SubmitButton } from './styles';

import { signInRequest } from '~/store/modules/auth/actions';
import logo from '~/assets/logo.png';

export default function SignIn() {
  const dispatch = useDispatch();
  const formRef = useRef(null);

  function handleSubmit({ id }) {
    dispatch(signInRequest(id));
  }

  return (
    <Background>
      <StatusBar backgroundColor="#7d40e7" barStyle="light-content" />
      <Container>
        <Image source={logo} />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <TextInput
            name="id"
            keyboardType="number-pad"
            autoCorrect={false}
            placeholder="Informe seu ID de cadastro"
            returnKeyType="send"
            onSubmitEditing={() => formRef.current.submitForm()}
          />

          <SubmitButton onPress={() => formRef.current.submitForm()}>
            Entrar no sistema
          </SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
