import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';

import Delivery from '../pages/Delivery';
import DeliveryCreate from '../pages/DeliveryCreate';
import DeliveryUpdate from '../pages/DeliveryUpdate';
import Deliveryman from '../pages/Deliveryman';
import DeliverymanCreate from '../pages/DeliverymanCreate';
import DeliverymanUpdate from '../pages/DeliverymanUpdate';
import Recipients from '../pages/Recipients';
import RecipientCreate from '../pages/RecipientCreate';
import RecipientUpdate from '../pages/RecipientUpdate';
import Problems from '../pages/Problems';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />

      <Route exact path="/deliveries" component={Delivery} isPrivate />

      <Route
        exact
        path="/deliveries/create"
        component={DeliveryCreate}
        isPrivate
      />

      <Route
        exact
        path="/deliveries/:id"
        component={DeliveryUpdate}
        isPrivate
      />

      <Route exact path="/deliverymen" component={Deliveryman} isPrivate />

      <Route
        exact
        path="/deliverymen/create"
        component={DeliverymanCreate}
        isPrivate
      />

      <Route
        exact
        path="/deliverymen/:id"
        component={DeliverymanUpdate}
        isPrivate
      />

      <Route exact path="/recipients" component={Recipients} isPrivate />

      <Route
        exact
        path="/recipients/create"
        component={RecipientCreate}
        isPrivate
      />

      <Route
        exact
        path="/recipients/:id"
        component={RecipientUpdate}
        isPrivate
      />

      <Route exact path="/problems" component={Problems} isPrivate />

      {/* <Route path="/" component={() => <h1>404</h1>} /> */}
    </Switch>
  );
}
