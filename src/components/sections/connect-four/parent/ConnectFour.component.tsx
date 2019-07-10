import React from 'react';

import { withStyles } from '@material-ui/styles';

import styles from './ConnectFour.styles';
import ConnectFourRouting from '../ConnectFour.routing';

export interface ConnectedState {
  boardSizeConfig: number;
}

export interface ConnectedDispatch {
  onBoardSizeChange: (number: number) => void;
}

class ConnectFour extends React.Component<ConnectedState & ConnectedDispatch> {
  render() {
    return (
      <>
        <ConnectFourRouting {...this.props} />
      </>
    );
  }
}

export default withStyles(styles)(ConnectFour);
