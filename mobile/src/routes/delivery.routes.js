import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Delivery from '~/pages/Delivery';
import DeliveryDetails from '~/pages/DeliveryDetails';
import DeliveryProblem from '~/pages/DeliveryProblem';
import ListProblem from '~/pages/ListProblem';
import DeliveryConfirm from '~/pages/DeliveryConfirm';

const Stack = createStackNavigator();

export default function DeliveryRoutes() {
  return (
    <Stack.Navigator initialRouteName="Entregas">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Entregas"
        component={Delivery}
      />
      <Stack.Screen
        name="Detalhes"
        options={{
          title: 'Detalhes da encomenda',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#7D40E7',
            elevation: 0,
          },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: '700' },
        }}
        component={DeliveryDetails}
      />
      <Stack.Screen
        name="Informar Problema"
        options={{
          title: 'Informar Problema',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#7D40E7',
            elevation: 0,
          },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: '700' },
        }}
        component={DeliveryProblem}
      />
      <Stack.Screen
        name="Visualizar Problemas"
        options={{
          title: 'Visualizar Problema',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#7D40E7',
            elevation: 0,
          },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: '700' },
        }}
        component={ListProblem}
      />
      <Stack.Screen
        name="Confirmar"
        options={{
          title: 'Confirmar entrega',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#7D40E7',
            elevation: 0,
          },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: '700' },
        }}
        component={DeliveryConfirm}
      />
    </Stack.Navigator>
  );
}
