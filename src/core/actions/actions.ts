import { Player } from '../models/player.model';
import {
  ConnectFourTypes,
  ADD_DISC,
  REMOVE_DISC,
  SET_BOARD_GRID,
  SET_BOARD_CONFIG_NUMBER,
  SET_DISCS_NUMBER,
  SET_DISCS_PLAYED_NUMBER,
  SET_CURRENT_PLAYER,
  SET_GAME_OVER
} from '../action-types/action-types';

export function addDisc(payload: any): ConnectFourTypes {
  return {
    type: ADD_DISC,
    payload
  };
}

export function removeDisc(payload: any): ConnectFourTypes {
  return {
    type: REMOVE_DISC,
    payload
  };
}

export function setBoardGrid(payload: any): ConnectFourTypes {
  return {
    type: SET_BOARD_GRID,
    payload
  };
}

export function setBoardConfigNumber(number: number): ConnectFourTypes {
  return {
    type: SET_BOARD_CONFIG_NUMBER,
    payload: {
      number
    }
  };
}

export function setDiscsNumber(number: number): ConnectFourTypes {
  return {
    type: SET_DISCS_NUMBER,
    payload: {
      number
    }
  };
}

export function setDiscsPlayedNumber(number: number): ConnectFourTypes {
  return {
    type: SET_DISCS_PLAYED_NUMBER,
    payload: {
      number
    }
  };
}

export function setCurrentPlayer(player: Player): ConnectFourTypes {
  return {
    type: SET_CURRENT_PLAYER,
    payload: {
      player
    }
  };
}

export function setGameOver(payload: boolean): ConnectFourTypes {
  return {
    type: SET_GAME_OVER,
    payload
  };
}
