import React from "react";
import { Route } from "react-router";
import { ConnectFourContainer } from "./ConnectFour.container";

const connectFourRoute: React.ReactNode = (
  <Route
    key="game-config"
    path="/game-config"
    exact
    component={ConnectFourContainer}
  />
);

export default connectFourRoute;
