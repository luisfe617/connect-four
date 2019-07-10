import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import boardRoute from './sections/board/Board.route';
import boardConfigRoute from './sections/board-config/BoardConfig.route';

const ConnectFourRouting: React.FC = (props: any) => (
  <Route
    key='boardconfig'
    path='/board-config'
    children={() => (
      <Switch>
        {[
          boardConfigRoute(props),
          boardRoute(props),
          <Redirect key='redirect' to='/board-config' />
        ]}
      </Switch>
    )}
  />
);
export default ConnectFourRouting;
