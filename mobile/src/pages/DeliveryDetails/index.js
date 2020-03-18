import React from 'react';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Background,
  Details,
  Card,
  Header,
  Title,
  Label,
  CardInfo,
  CardDates,
  Date,
  Actions,
  Action,
  ActionText,
} from './styles';

import api from '~/services/api';

export default function DeliveryDetails({ route }) {
  const navigation = useNavigation();
  const { delivery } = route.params;
  const auth = useSelector(state => state.auth);

  async function handleUpdate() {
    try {
      if (delivery.statusFormatted.text === 'pendente') {
        await api.put(`/deliveries/withdraw/${delivery.id}`, {
          deliveryman_id: auth.id,
        });
        navigation.navigate('Entregas');
      } else {
        navigation.navigate('Confirmar', { deliveryId: delivery.id });
      }
    } catch (err) {}
  }

  return (
    <Container>
      <StatusBar backgroundColor="#7D40E7" barStyle="light-content" />
      <Background />
      <Details>
        <Card>
          <Header>
            <Icon name="local-shipping" size={28} color="#7D40E7" />
            <Title>Informações da entrega</Title>
          </Header>
          <Label>destinatário</Label>
          <CardInfo>{delivery.recipient.name}</CardInfo>
          <Label>endereço de entrega</Label>
          <CardInfo>
            {delivery.recipient.street}, {delivery.recipient.number},
            {delivery.recipient.city}, {delivery.recipient.state} -{' '}
            {delivery.recipient.zip_code}
          </CardInfo>
          <Label>produto </Label>
          <CardInfo>{delivery.product}</CardInfo>
        </Card>

        <Card>
          <Header>
            <Icon name="event" size={28} color="#7D40E7" />
            <Title>Situação da entrega</Title>
          </Header>
          <Label>Status</Label>
          <CardInfo>{delivery.statusFormatted.text}</CardInfo>
          <CardDates>
            <Date>
              <Label>data de retirada</Label>
              <CardInfo>
                {delivery.dateFormatted.startDate
                  ? delivery.dateFormatted.startDate
                  : '--/--/--'}
              </CardInfo>
            </Date>
            <Date>
              <Label>data de Entrega</Label>
              <CardInfo>
                {delivery.dateFormatted.endDate
                  ? delivery.dateFormatted.endDate
                  : '--/--/--'}
              </CardInfo>
            </Date>
          </CardDates>
        </Card>
        <Actions>
          <Action
            onPress={() =>
              navigation.navigate('Informar Problema', {
                deliveryId: delivery.id,
              })
            }
          >
            <Icon name="highlight-off" color="#E74040" size={28} />
            <ActionText>Informar Problema</ActionText>
          </Action>

          <Action
            onPress={() =>
              navigation.navigate('Visualizar Problemas', {
                deliveryId: delivery.id,
              })
            }
          >
            <Icon name="info-outline" color="#E7BA40" size={28} />
            <ActionText>Visualizar Problemas</ActionText>
          </Action>

          <Action onPress={handleUpdate}>
            <Icon name="check-circle" color="#7D40E7" size={28} />
            <ActionText>
              {delivery.statusFormatted.text === 'pendente'
                ? 'Realizar Retirada'
                : 'Confirmar Entrega'}
            </ActionText>
          </Action>
        </Actions>
      </Details>
    </Container>
  );
}
