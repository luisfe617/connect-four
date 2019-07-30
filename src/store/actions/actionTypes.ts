import { Color } from '../../core/models/color.model';
import { GameStatus } from '../../core/models/gameStatus.model';

export const ADD_DISC = 'ADD_DISC';
export const SET_BOARD_GRID_EMPTY = 'SET_BOARD_GRID_EMPTY';
export const SET_BOARD_CONFIG_NUMBER = 'SET_BOARD_CONFIG_NUMBER';
export const SET_DISCS_NUMBER = 'SET_DISCS_NUMBER';
export const INCREMENT_DISCS_PLAYED_NUMBER = 'INCREMENT_DISCS_PLAYED_NUMBER';
export const SET_CURRENT_PLAYER = 'SET_CURRENT_PLAYER';
export const SET_GAME_STATUS = 'SET_GAME_STATUS';
export const RESTART_GAME = 'RESTART_GAME';

interface AddDiscAction {
  type: typeof ADD_DISC;
  payload: {
    column: number;
  };
}

interface SetBoardGridEmptyAction {
  type: typeof SET_BOARD_GRID_EMPTY;
  payload: {
    number: number;
  };
}

interface SetBoardConfigNumberAction {
  type: typeof SET_BOARD_CONFIG_NUMBER;
  payload: {
    number: number;
  };
}

interface SetDiscsNumberAction {
  type: typeof SET_DISCS_NUMBER;
  payload: {
    number: number;
  };
}

interface IncrementDiscsPlayedNumberAction {
  type: typeof INCREMENT_DISCS_PLAYED_NUMBER;
}

interface SetCurrentPlayerAction {
  type: typeof SET_CURRENT_PLAYER;
  payload: {
    playerColor: Color;
  };
}

interface SetGameStatusAction {
  type: typeof SET_GAME_STATUS;
  payload: {
    status: GameStatus;
  };
}

interface RestartGameAction {
  type: typeof RESTART_GAME;
}

export type ConnectFourTypes =
  | AddDiscAction
  | SetBoardGridEmptyAction
  | SetBoardConfigNumberAction
  | SetDiscsNumberAction
  | IncrementDiscsPlayedNumberAction
  | SetCurrentPlayerAction
  | SetGameStatusAction
  | RestartGameAction;
