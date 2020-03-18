import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { format, parseISO } from 'date-fns';
import { StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { signOut } from '~/store/modules/auth/actions';

import DeliveryItem from '~/components/DeliveryItem';

import {
  Container,
  Profile,
  Avatar,
  Welcome,
  WelcomeText,
  WelcomeTextUsername,
  DeliveryMenu,
  MenuTitle,
  DeliveryOptions,
  DeliveryOption,
  DeliveryList,
} from './styles';

import api from '~/services/api';

export default function Delivery() {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);
  const auth = useSelector(state => state.auth);

  const [deliveries, setDeliveries] = useState([]);
  const [deliveryType, setDeliveryType] = useState('pendents');

  function handleLogout() {
    dispatch(signOut());
  }

  function formatDate(delivery) {
    return {
      startDate: delivery.start_date
        ? format(parseISO(delivery.start_date), 'dd/MM/yyyy')
        : null,
      endDate: delivery.end_date
        ? format(parseISO(delivery.end_date), 'dd/MM/yyyy')
        : null,
    };
  }

  function formatStatus(delivery) {
    let status = {};

    if (delivery.canceled_at) {
      status = { text: 'cancelada' };
      return status;
    }
    if (delivery.end_date) {
      status = { text: 'entregue' };
      return status;
    }
    if (delivery.start_date) {
      status = { text: 'retirada' };
      return status;
    }
    status = { text: 'pendente' };

    return status;
  }

  useEffect(() => {
    async function loadDeliveries() {
      if (deliveryType === 'pendents') {
        const response = await api.get(`/deliveryman/${auth.id}/undelivered`);

        const data = response.data.map(d => {
          return {
            ...d,
            statusFormatted: formatStatus(d),
            dateFormatted: formatDate(d),
          };
        });

        setDeliveries(data);
      }
      if (deliveryType === 'delivered') {
        const response = await api.get(`/deliveryman/${auth.id}/delivered`);

        const data = response.data.map(d => {
          return {
            ...d,
            statusFormatted: formatStatus(d),
            dateFormatted: formatDate(d),
          };
        });

        setDeliveries(data);
      }
    }

    loadDeliveries();
  }, [auth.id, deliveryType, isFocused]);

  return (
    <Container>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <Profile>
        <Avatar
          source={{
            uri: profile.avatar.url
              ? profile.avatar.url.replace('localhost', '192.168.0.11')
              : 'https://api.adorable.io/avatars/285/abott@adorable.png',
          }}
        />
        <Welcome>
          <WelcomeText>Bem vindo de volta,</WelcomeText>
          <WelcomeTextUsername>{profile.name}</WelcomeTextUsername>
        </Welcome>

        <Icon
          onPress={handleLogout}
          name="exit-to-app"
          size={28}
          color="#E74040"
        />
      </Profile>

      <DeliveryMenu>
        <MenuTitle>Entregas</MenuTitle>

        <DeliveryOptions>
          <DeliveryOption
            onPress={() => {
              setDeliveryType('pendents');
            }}
            deliveryType={deliveryType === 'pendents'}
          >
            Pendentes
          </DeliveryOption>
          <DeliveryOption
            onPress={() => {
              setDeliveryType('delivered');
            }}
            deliveryType={deliveryType === 'delivered'}
          >
            Entregues
          </DeliveryOption>
        </DeliveryOptions>
      </DeliveryMenu>

      <DeliveryList
        data={deliveries}
        renderItem={({ item }) => <DeliveryItem data={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </Container>
  );
}
