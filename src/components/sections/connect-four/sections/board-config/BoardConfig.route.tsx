import React from 'react';
import { Route } from 'react-router';
import BoardConfigComponent from './BoardConfig.component';

const boardRoute = (props: any) => {
  return (
    <Route
      key="boardconfig"
      path={`${props.match.url}`}
      exact
      render={() => (
        <BoardConfigComponent
          boardSize={props.boardSizeConfig}
          onChange={props.onBoardSizeChange}
        />
      )}
    />
  );
};

export default boardRoute;
