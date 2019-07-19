import React from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../../../../store/actions/actions';
import { GameState } from '../../../../core/models/state.model';
import { Color } from '../../../../core/models/color.model';
import ConnectFourRouting from '../ConnectFour.routing';

export interface ConnectedState {
  boardGrid: any;
  boardSizeConfig: number;
  currentPlayer: Color;
}

export interface ConnectedDispatch {
  onBoardSizeChange: (number: number) => void;
  onDiscAdded: (column: number) => void;
  onRestartGame: () => void;
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

const mapStateToProps = (state: GameState): ConnectedState => ({
  boardGrid: state.boardGrid,
  boardSizeConfig: state.boardSizeConfig,
  currentPlayer: state.currentPlayer
});

const mapDispatchToProps = (dispatch: any): ConnectedDispatch => ({
  onBoardSizeChange: (number: number) =>
    dispatch(actionCreators.setBoardConfiguration(number)),
  onDiscAdded: (column: number) =>
    dispatch(actionCreators.addDiscToBoard({ column })),
  onRestartGame: () => dispatch(actionCreators.restartGame())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectFour);
