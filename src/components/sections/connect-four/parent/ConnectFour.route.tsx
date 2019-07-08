import React from 'react';
import { Route } from 'react-router';
import { ConnectFourContainer } from './ConnectFour.container';

const connectFourRoute: React.ReactNode = (
  <Route
    key="connectfour"
    path="/connect-four"
    exact
    component={ConnectFourContainer}
  />
);

export default connectFourRoute;
