import React from 'react';
import { Route } from 'react-router';
import ConnectFourComponent from './ConnectFour.component';

const connectFourRoute: React.ReactNode = (
  <Route key='connect-four' component={ConnectFourComponent} />
);

export default connectFourRoute;
