import React from 'react';

import { Redirect, Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import connectFourRoute from '../sections/connect-four/parent/ConnectFour.route';

import useStyles from './App.styles';
import '../../assets/styles/scss/page-transitions.scss';

const AppRouting: React.FC = () => {
  const classes = useStyles();

  return (
    <Route
      render={({ location }) => (
        <div className={classes.appContainer}>
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={1000} classNames='page'>
              <Switch location={location}>
                {[connectFourRoute, <Redirect key='redirect' to='/' />]}
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
      )}
    />
  );
};

export default AppRouting;
