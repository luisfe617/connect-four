import React from 'react';
import { Route } from 'react-router';
import BoardConfigComponent from './BoardConfig.component';

const boardRoute = (props: any) => (
  <Route
    key='home'
    path='/'
    exact
    render={() => (
      <BoardConfigComponent
        boardSize={props.boardSizeConfig}
        onChange={props.onBoardSizeChange}
      />
    )}
  />
);
export default boardRoute;
