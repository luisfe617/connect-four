import React from 'react';
import { Route } from 'react-router';
import { ConnectFourContainer } from './ConnectFour.container';

const connectFourRoute: React.ReactNode = (
  <Route key='game-container' component={ConnectFourContainer} />
);

export default connectFourRoute;
