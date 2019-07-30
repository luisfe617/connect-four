import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ConnectFourRouting from '../ConnectFour.routing';
import { GameState } from '../../../../core/models/state.model';
import { Color } from '../../../../core/models/color.model';
import { ConnectFourActions } from '../../../../store/actions/gameActions';
import { ConnectFourConfigActions } from '../../../../store/actions/configurationActions';
import { GameStatus } from '../../../../core/models/gameStatus.model';

export interface ConnectedState {
  boardGrid: any;
  boardSizeConfig: number;
  currentPlayer: Color;
  gameStatus: GameStatus;
}

class ConnectFour extends React.Component<ConnectedState> {
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
  currentPlayer: state.currentPlayer,
  gameStatus: state.gameStatus
});

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(
    {
      changeBoardSize: ConnectFourConfigActions.setBoardConfiguration,
      addDisc: ConnectFourActions.addDiscToBoard,
      restartGame: ConnectFourActions.restartGame
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectFour);
