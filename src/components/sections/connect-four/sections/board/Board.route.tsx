import React from "react";
import { Route } from "react-router";
import BoardComponent from "./Board.component";

const boardRoute = (props: any) => (
  <Route
    key="gameboard"
    path="/game-board"
    exact
    render={() => <BoardComponent {...props} />}
  />
);
export default boardRoute;
