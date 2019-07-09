import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import boardRoute from "./sections/board/Board.route";
import boardConfigRoute from "./sections/board-config/BoardConfig.route";

const ConnectFourRouting: React.FC = (props: any) => (
  <Route
    key="game-config"
    path="/game-config"
    render={() => (
      <Switch>
        {[
          boardConfigRoute(props),
          boardRoute(props),
          <Redirect key="redirect" to="/game-config" />
        ]}
      </Switch>
    )}
  />
);

export default ConnectFourRouting;
