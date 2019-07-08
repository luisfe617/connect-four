import { GameState } from '../models/state.model';
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

const initialState: GameState = {
  boardSizeConfig: 4
};

const rootReducer = (
  state = initialState,
  action: ConnectFourTypes
): GameState => {
  switch (action.type) {
    case ADD_DISC: {
      return state;
    }
    case REMOVE_DISC: {
      return state;
    }
    case SET_BOARD_GRID: {
      return state;
    }
    case SET_BOARD_CONFIG_NUMBER: {
      return {
        boardSizeConfig: action.payload.number
      };
    }
    case SET_DISCS_NUMBER: {
      return state;
    }
    case SET_DISCS_PLAYED_NUMBER: {
      return state;
    }
    case SET_CURRENT_PLAYER: {
      return state;
    }
    case SET_GAME_OVER: {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default rootReducer;
