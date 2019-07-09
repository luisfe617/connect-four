import React from "react";

import { withStyles } from "@material-ui/styles";

import styles from "./ConnectFour.styles";
import ConnectFourRouting from "../ConnectFour.routing";

export interface OwnProps {
  classes?: any;
}

export interface ConnectedState {
  boardSizeConfig: number;
}

export interface ConnectedDispatch {
  onBoardSizeChange: (number: number) => void;
}

export interface OwnState {}

class ConnectFour extends React.Component<
  OwnProps & ConnectedState & ConnectedDispatch,
  OwnState
> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.connectFour}>
        <ConnectFourRouting {...this.props} />
      </div>
    );
  }
}

export default withStyles(styles)(ConnectFour);
