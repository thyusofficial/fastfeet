import React from 'react';

import { useDispatch } from 'react-redux';
import logo from '~/assets/logo.svg';

import { signOut } from '~/store/modules/auth/actions';
import { Container, Content } from './styles';
import history from '~/services/history';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="FastFeet" />

          <button
            type="button"
            onClick={() => {
              history.push('/deliveries');
            }}
          >
            Entregas
          </button>
          <button
            type="button"
            onClick={() => {
              history.push('/deliverymen');
            }}
          >
            Entregadores
          </button>
          <button
            type="button"
            onClick={() => {
              history.push('/recipients');
            }}
          >
            Destinatários
          </button>
          <button
            type="button"
            onClick={() => {
              history.push('/problems');
            }}
          >
            Problemas
          </button>
        </nav>

        <aside>
          <span>Admin FastFeet</span>
          <button type="button" onClick={handleSignOut}>
            Sair do sistema
          </button>
        </aside>
      </Content>
    </Container>
  );
}
