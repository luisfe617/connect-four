import { Dispatch } from 'react';

import {
  ConnectFourTypes,
  ADD_DISC,
  INCREMENT_DISCS_PLAYED_NUMBER,
  SET_CURRENT_PLAYER,
  SET_GAME_STATUS,
  RESTART_GAME
} from './actionTypes';
import { Color } from '../../core/models/color.model';
import { GameState } from '../../core/models/state.model';
import { GameStatus } from '../../core/models/gameStatus.model';
import boardUtils from '../../core/utils/boardUtils';
import checkWinner from '../../core/utils/checkWinner';

export class ConnectFourActions {
  static addDiscToBoard = (column: number) => (
    dispatch: Dispatch<any>,
    getState: () => GameState
  ) => {
    if (getState().gameStatus !== 'started') return;

    if (boardUtils.isDiscPlayable(getState(), column)) {
      dispatch(GameActions.addDisc(column));
      dispatch(GameActions.incrementDiscsPlayedNumber());
      dispatch(GameActions.setCurrentPlayer(getState().currentPlayer));

      let winner = checkWinner(getState().boardGrid);
      if (winner === 'red') {
        dispatch(GameActions.setGameStatus('player1_wins'));
      }
      if (winner === 'yellow') {
        dispatch(GameActions.setGameStatus('player2_wins'));
      }
    }

    if (getState().discsPlayed >= getState().discsAmount / 2) {
      dispatch(GameActions.setGameStatus('draw'));
    }
  };

  static removeDisc = (payload: { column: number }) => (
    dispatch: Dispatch<any>
  ) => {};

  static restartGame = () => (dispatch: Dispatch<any>) =>
    dispatch(GameActions.restartGame());

  static setGameStatus = () => (dispatch: Dispatch<any>) =>
    dispatch(GameActions.setGameStatus('draw'));
}

class GameActions {
  static addDisc = (column: number): ConnectFourTypes => ({
    type: ADD_DISC,
    payload: {
      column
    }
  });

  static incrementDiscsPlayedNumber = (): ConnectFourTypes => ({
    type: INCREMENT_DISCS_PLAYED_NUMBER
  });

  static setCurrentPlayer = (playerColor: Color): ConnectFourTypes => ({
    type: SET_CURRENT_PLAYER,
    payload: {
      playerColor
    }
  });

  static setGameStatus = (status: GameStatus): ConnectFourTypes => ({
    type: SET_GAME_STATUS,
    payload: { status }
  });

  static restartGame = (): ConnectFourTypes => ({
    type: RESTART_GAME
  });
}
