import React from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import boardRoute from './sections/board/Board.route';
import boardConfigRoute from './sections/board-config/BoardConfig.route';
import '../../../assets/styles/scss/page-transitions.scss';

const ConnectFourRouting: React.FC = (props: any) => (
  <Route
    key='connect-four'
    path='/'
    children={routerProps => (
      <TransitionGroup>
        <CSSTransition
          key={routerProps.location.key}
          timeout={1000}
          classNames='page'
        >
          <Switch location={routerProps.location}>
            {[
              boardConfigRoute({ ...props, ...routerProps }),
              boardRoute({ ...props, ...routerProps }),
              <Redirect key='redirect' to='/' />
            ]}
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )}
  />
);
export default ConnectFourRouting;
