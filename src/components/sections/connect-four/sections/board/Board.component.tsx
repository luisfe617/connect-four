import React from 'react';

import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import Refresh from '@material-ui/icons/RefreshRounded';
import { Typography } from '@material-ui/core';

import { Color } from '../../../../../core/models/color.model';
import { ConnectedState } from '../../parent/ConnectFour.component';
import SharedStructure from '../../../../shared/shared-structure/SharedStructure.component';
import BoardPanel from '../board-panel/BoardPanel.component';
import useStyles from './Board.styles';

export interface OwnProps extends ConnectedState {
  history: any;
  actions: {
    addDisc: (column: number) => void;
    restartGame: () => void;
  };
}

const Board = (props: OwnProps) => {
  const classes = useStyles();

  const { history, actions } = props;

  const handleGoBack = () => {
    history.goBack();
    actions.restartGame();
  };

  const gameStatusMessage = () => {
    switch (props.gameStatus) {
      case 'player1_wins':
        return 'Red player wins!';
      case 'player2_wins':
        return 'Yellow player wins!';
      case 'draw':
        return 'Draw!';
      default:
        return playerTurnText();
    }
  };

  const playerTurnText = () => {
    if (props.currentPlayer === 'red') {
      return `Red player's turn`;
    }
    return `Yellow player's turn`;
  };

  const calculateRemainingMoves = (player: Color) => {
    const { discsAmount, discsPlayed } = props;
    const total = discsAmount / 2;
    let res;
    if (player === 'red') {
      if (discsPlayed === 0) return total;
      return total - getDiscsColorCount('red');
    } else {
      if (discsPlayed === 0) return total;
      return total - getDiscsColorCount('yellow');
    }
  };

  const getDiscsColorCount = (discColor: Color) => {
    return props.boardGrid.reduce((acc: number, curr: any[]) => {
      return (acc += curr.filter(el => el === discColor).length);
    }, 0);
  };

  return (
    <SharedStructure>
      <div className={classes.gameStatus}>
        <Typography variant='h2' align='center'>
          {gameStatusMessage()}
        </Typography>
        <Typography variant='h6' align='center'>
          Discs to play
        </Typography>
        <div className={classes.discsInfo}>
          <Typography variant='body2' component='span'>
            Red discs: {calculateRemainingMoves('red')}
          </Typography>
          <Typography variant='body2' component='span'>
            Yellow discs: {calculateRemainingMoves('yellow')}
          </Typography>
        </div>
      </div>
      <BoardPanel {...props} />
      <Tooltip title='Restart game' aria-label='Restart game'>
        <Fab
          color='secondary'
          className={classes.fabPosition}
          onClick={handleGoBack}
          onTouchEnd={handleGoBack}
        >
          <Refresh />
        </Fab>
      </Tooltip>
    </SharedStructure>
  );
};

export default Board;
