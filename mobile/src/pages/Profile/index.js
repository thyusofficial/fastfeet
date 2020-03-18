import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  Container,
  Avatar,
  ProfileData,
  ProfileLabel,
  ProfileText,
  LogoutButton,
} from './styles';

import { signOut } from '~/store/modules/auth/actions';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Avatar
        source={{
          uri: profile.avatar
            ? profile.avatar.url.replace('localhost', '192.168.0.11')
            : 'https://api.adorable.io/avatars/285/abott@adorable.png',
        }}
      />

      <ProfileData>
        <ProfileLabel>Nome completo</ProfileLabel>
        <ProfileText>{profile.name}</ProfileText>

        <ProfileLabel>Email</ProfileLabel>
        <ProfileText>{profile.email}</ProfileText>

        <ProfileLabel>Data de cadastro</ProfileLabel>
        <ProfileText>{profile.created_at}</ProfileText>

        <LogoutButton onPress={handleLogout}>Logout</LogoutButton>
      </ProfileData>
    </Container>
  );
}
