import React, { useRef } from 'react';
import { Form } from '@unform/mobile';
import { Alert } from 'react-native';

import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Background,
  Content,
  ProblemDescription,
  SubmitButton,
} from './styles';
import api from '~/services/api';

export default function DeliveryProblem({ route }) {
  const navigation = useNavigation();
  const { deliveryId } = route.params;
  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        description: Yup.string().required('Insira a descrição do problema'),
      });

      await api.post(`/delivery/${deliveryId}/problems`, {
        description: data.description,
      });

      navigation.navigate('Visualizar Problemas', { deliveryId });
    } catch (err) {
      Alert.alert('Houve um erro ao informar o problema', 'Verifique os dados');
    }
  }

  return (
    <Container>
      <Background />
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <ProblemDescription
            name="description"
            keyboardType="default"
            placeholder="Inclua aqui o problema que ocorreu na entrega."
            returnKeyType="send"
            onSubmitEditing={() => formRef.current.submitForm()}
          />

          <SubmitButton onPress={() => formRef.current.submitForm()}>
            Enviar
          </SubmitButton>
        </Form>
      </Content>
    </Container>
  );
}
