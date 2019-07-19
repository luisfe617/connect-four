import {
  ConnectFourTypes,
  ADD_DISC,
  SET_BOARD_GRID_EMPTY,
  SET_BOARD_CONFIG_NUMBER,
  SET_DISCS_NUMBER,
  INCREMENT_DISCS_PLAYED_NUMBER,
  SET_CURRENT_PLAYER,
  SET_GAME_OVER,
  RESTART_GAME
} from './actionTypes';
import { Color } from '../../core/models/color.model';
import { GameState } from '../../core/models/state.model';
import { isColAvailable } from '../utility';

export const addDiscToBoard = (payload: { column: number }) => {
  return (dispatch: any, getState: () => GameState) => {
    const prevState = getState();
    if (
      prevState.discsPlayed < prevState.discsAmount &&
      isColAvailable(prevState.boardGrid, payload.column)
    ) {
      dispatch(addDisc(payload.column));
      dispatch(incrementDiscsPlayedNumber());
      dispatch(setCurrentPlayer(prevState.currentPlayer));
    }
  };
};

export const removeDisc = (payload: { column: number }) => {
  return (dispatch: any, getState: () => GameState) => { };
};

export const setBoardConfiguration = (number: number) => {
  return (dispatch: any, getState: () => GameState) => {
    dispatch(setBoardConfigNumber(number));
    dispatch(setDiscsNumber(number));
    dispatch(setBoardGridEmpty(number));
  };
};

export const setBoardConfigNumber = (number: number): ConnectFourTypes => {
  return {
    type: SET_BOARD_CONFIG_NUMBER,
    payload: {
      number
    }
  };
};

export const setDiscsNumber = (number: number): ConnectFourTypes => {
  return {
    type: SET_DISCS_NUMBER,
    payload: {
      number
    }
  };
};

export const setBoardGridEmpty = (number: number): ConnectFourTypes => {
  return {
    type: SET_BOARD_GRID_EMPTY,
    payload: {
      number
    }
  };
};

export const addDisc = (column: number): ConnectFourTypes => {
  return {
    type: ADD_DISC,
    payload: {
      column
    }
  };
};

export const incrementDiscsPlayedNumber = (): ConnectFourTypes => {
  return {
    type: INCREMENT_DISCS_PLAYED_NUMBER
  };
};

export const setCurrentPlayer = (playerColor: Color): ConnectFourTypes => {
  return {
    type: SET_CURRENT_PLAYER,
    payload: {
      playerColor
    }
  };
};

export const setGameOver = (payload: boolean): ConnectFourTypes => {
  return {
    type: SET_GAME_OVER,
    payload
  };
};

export const restartGame = (): ConnectFourTypes => {
  return {
    type: RESTART_GAME
  };
};
