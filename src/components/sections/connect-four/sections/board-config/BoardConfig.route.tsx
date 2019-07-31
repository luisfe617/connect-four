import React from 'react';
import { Route } from 'react-router';
import BoardConfigComponent from './BoardConfig.component';

const boardRoute = (props: any) => (
  <Route
    key='game-config'
    path='/'
    exact
    render={() => <BoardConfigComponent {...props} />}
  />
);
export default boardRoute;
