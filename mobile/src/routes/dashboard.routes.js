import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Delivery from '~/pages/Delivery';
import Profile from '~/pages/Profile';

import DeliveryRoutes from '~/routes/delivery.routes';

const Tab = createBottomTabNavigator();

export default function Dashboard() {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen
          name="Entregas"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="reorder" size={size} color={color} />
            ),
          }}
          component={DeliveryRoutes}
        />
        <Tab.Screen
          name="Profile"
          options={{
            tabBarLabel: 'Meu Perfil',
            tabBarIcon: ({ color, size }) => (
              <Icon name="account-circle" size={size} color={color} />
            ),
          }}
          component={Profile}
        />
      </Tab.Navigator>
    </>
  );
}
