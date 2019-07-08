import { Player } from '../models/player.model';

export const ADD_DISC = 'ADD_DISC';
export const REMOVE_DISC = 'REMOVE_DISC';

export const SET_BOARD_GRID = 'SET_BOARD_GRID';
export const SET_BOARD_CONFIG_NUMBER = 'SET_BOARD_CONFIG_NUMBER';
export const SET_DISCS_NUMBER = 'SET_DISCS_NUMBER';
export const SET_DISCS_PLAYED_NUMBER = 'SET_DISCS_PLAYED_NUMBER';
export const SET_CURRENT_PLAYER = 'SET_CURRENT_PLAYER';
export const SET_GAME_OVER = 'SET_GAME_OVER';

interface AddDiscAction {
  type: typeof ADD_DISC;
  payload: any;
}

interface RemoveDiscAction {
  type: typeof REMOVE_DISC;
  payload: any;
}

interface SetBoardGridAction {
  type: typeof SET_BOARD_GRID;
  payload: any;
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

interface SetDiscsPlayedNumberAction {
  type: typeof SET_DISCS_PLAYED_NUMBER;
  payload: {
    number: number;
  };
}

interface SetCurrentPlayerAction {
  type: typeof SET_CURRENT_PLAYER;
  payload: {
    player: Player;
  };
}

interface SetGameOverAction {
  type: typeof SET_GAME_OVER;
  payload: boolean;
}

export type ConnectFourTypes =
  | AddDiscAction
  | RemoveDiscAction
  | SetBoardGridAction
  | SetBoardConfigNumberAction
  | SetDiscsNumberAction
  | SetDiscsPlayedNumberAction
  | SetCurrentPlayerAction
  | SetGameOverAction;
