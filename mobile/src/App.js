import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

// import { Container } from './styles';
import Routes from './routes';

export default function App() {
  const signed = useSelector(state => state.auth.signed);
  return (
    <NavigationContainer>
      <Routes signed={signed} />
    </NavigationContainer>
  );
}
