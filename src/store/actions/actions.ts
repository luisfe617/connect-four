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
} from "./actionTypes";
import { GameState } from "../../core/models/state.model";

export const addDisc = (payload: any): ConnectFourTypes => {
  return {
    type: ADD_DISC,
    payload
  };
};

export const removeDisc = (payload: any): ConnectFourTypes => {
  return {
    type: REMOVE_DISC,
    payload
  };
};

export const setBoardConfiguration = (number: number) => {
  return (dispatch: any, getState: () => GameState) => {
    dispatch(setBoardConfigNumber(number));
    dispatch(setDiscsNumber(number));
    dispatch(setBoardGrid(number));
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

export const setBoardGrid = (number: number): ConnectFourTypes => {
  return {
    type: SET_BOARD_GRID,
    payload: {
      number
    }
  };
};

export const setDiscsPlayedNumber = (number: number): ConnectFourTypes => {
  return {
    type: SET_DISCS_PLAYED_NUMBER,
    payload: {
      number
    }
  };
};

export const setCurrentPlayer = (
  playerColor: "red" | "yellow"
): ConnectFourTypes => {
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
