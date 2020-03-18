import React, { useEffect, useState } from 'react';

import { parseISO, format } from 'date-fns';
import {
  Container,
  Background,
  DeliveryTitle,
  Content,
  ProblemList,
  Problem,
  ProblemTitle,
  ProblemDate,
} from './styles';
import api from '~/services/api';

export default function ListProblem({ route }) {
  const { deliveryId } = route.params;
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    async function loadProblems() {
      try {
        const response = await api.get(`/delivery/${deliveryId}/problems`);
        const data = response.data.map(p => {
          return {
            ...p,
            createdFormatted: format(parseISO(p.createdAt), 'dd/MM/yyyy'),
          };
        });

        setProblems(data);
      } catch (err) {}
    }
    loadProblems();
  }, [deliveryId]);

  console.tron.log(problems);

  return (
    <Container>
      <Background>
        <DeliveryTitle>Encomenda {deliveryId}</DeliveryTitle>
      </Background>
      <Content>
        <ProblemList
          data={problems}
          renderItem={({ item }) => (
            <Problem>
              <ProblemTitle>{item.description}</ProblemTitle>
              <ProblemDate>{item.createdFormatted}</ProblemDate>
            </Problem>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </Content>
    </Container>
  );
}
