import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '~/pages/SignIn';

import DashboardRoutes from './routes/dashboard.routes';

const Stack = createStackNavigator();

export default function Routes({ signed }) {
  return (
    <Stack.Navigator headerMode="none">
      {!signed ? (
        <Stack.Screen name="SignIn" component={SignIn} />
      ) : (
        <Stack.Screen name="Dashboard" component={DashboardRoutes} />
      )}
    </Stack.Navigator>
  );
}
