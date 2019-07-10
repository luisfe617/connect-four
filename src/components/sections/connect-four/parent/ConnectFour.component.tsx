import React from 'react';

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

export default ConnectFour;
