import React, { useEffect, useState } from 'react';

import HeaderList from '~/components/HeaderList';
import ProblemMore from '~/components/ProblemMore';

import { Container, Content, Table } from './styles';

import api from '~/services/api';

export default function Delivery() {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    async function loadProblems() {
      const response = await api.get('/delivery/problems');
      const { data } = response;
      setProblems(data);
    }

    loadProblems();
  }, []);

  return (
    <Container>
      <Content>
        <HeaderList title="Problemas na entrega" />
        <Table>
          <thead>
            <tr>
              <th>Encomenda</th>
              <th>Problema</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {problems.map(problem => (
              <tr key={problem.id}>
                <td>{problem.delivery_id}</td>
                <td>{problem.description}</td>
                <td>
                  <ProblemMore problem={problem} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Content>
    </Container>
  );
}
