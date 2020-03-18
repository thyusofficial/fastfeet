import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import ItemStatus from './ItemStatus';

import {
  Container,
  ItemHeader,
  HeaderText,
  ItemFooter,
  ItemDetail,
  ItemDetailTitle,
  ItemDetailText,
  Details,
} from './styles';

export default function DeliveryItem({ data }) {
  const navigation = useNavigation();
  return (
    <Container>
      <ItemHeader>
        <Icon name="local-shipping" size={28} color="#7D40E7" />
        <HeaderText>
          Encomenda {data.id < 10 ? `0${data.id}` : data.id}
        </HeaderText>
      </ItemHeader>

      <ItemStatus status={data.statusFormatted} />

      <ItemFooter>
        <ItemDetail>
          <ItemDetailTitle>Data</ItemDetailTitle>
          <ItemDetailText>
            {data.dateFormatted.startDate ? data.dateFormatted.startDate : null}
          </ItemDetailText>
        </ItemDetail>

        <ItemDetail>
          <ItemDetailTitle>Cidade</ItemDetailTitle>
          <ItemDetailText>{data.recipient.city}</ItemDetailText>
        </ItemDetail>
        <ItemDetail>
          <Details
            onPress={() => navigation.navigate('Detalhes', { delivery: data })}
          >
            Ver detalhes
          </Details>
        </ItemDetail>
      </ItemFooter>
    </Container>
  );
}
