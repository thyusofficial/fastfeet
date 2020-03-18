import React, { useState, useEffect } from 'react';

import {
  Container,
  StatusContainer,
  Status,
  Line,
  StatusText,
  TextContainer,
} from './styles';

export default function ItemStatus({ status }) {
  return (
    <Container>
      <StatusContainer>
        <Status
          marked={
            status.text === 'entregue' ||
            status.text === 'retirada' ||
            status.text === 'pendente'
          }
        />
        <Line />
        <Status
          marked={status.text === 'entregue' || status.text === 'retirada'}
        />
        <Line />
        <Status marked={status.text === 'entregue'} />
      </StatusContainer>
      <TextContainer>
        <StatusText>Aguardando Retirada</StatusText>
        <StatusText>Retirada</StatusText>
        <StatusText>Entregue</StatusText>
      </TextContainer>
    </Container>
  );
}
