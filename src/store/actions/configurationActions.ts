import { Dispatch } from 'react';
import {
  ConnectFourTypes,
  SET_BOARD_GRID_EMPTY,
  SET_BOARD_CONFIG_NUMBER,
  SET_DISCS_NUMBER
} from './actionTypes';

export class ConnectFourConfigActions {
  static setBoardConfiguration = (number: number) => (
    dispatch: Dispatch<any>
  ) => {
    dispatch(ConfigurationActions.setBoardConfigNumber(number));
    dispatch(ConfigurationActions.setDiscsNumber(number));
    dispatch(ConfigurationActions.setBoardGridEmpty(number));
  };
}

class ConfigurationActions {
  static setBoardConfigNumber = (number: number): ConnectFourTypes => ({
    type: SET_BOARD_CONFIG_NUMBER,
    payload: {
      number
    }
  });

  static setDiscsNumber = (number: number): ConnectFourTypes => ({
    type: SET_DISCS_NUMBER,
    payload: {
      number
    }
  });

  static setBoardGridEmpty = (number: number): ConnectFourTypes => ({
    type: SET_BOARD_GRID_EMPTY,
    payload: {
      number
    }
  });
}
