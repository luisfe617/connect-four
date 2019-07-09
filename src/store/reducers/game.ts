import { GameState } from "../../core/models/state.model";
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
} from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState: GameState = {
  boardSizeConfig: 4,
  discsAmount: 21,
  currentPlayer: "red"
};

const setCurrentPlayer = (playerColor: "red" | "yellow") => {
  return playerColor.startsWith("y") ? "red" : "yellow";
};

const reducer = (state = initialState, action: ConnectFourTypes): GameState => {
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
      return updateObject(state, {
        boardSizeConfig: action.payload.number
      });
    }
    case SET_DISCS_NUMBER: {
      return updateObject(state, {
        discsAmount: action.payload.number
      });
    }
    case SET_DISCS_PLAYED_NUMBER: {
      return state;
    }
    case SET_CURRENT_PLAYER: {
      return updateObject(state, setCurrentPlayer(action.payload.playerColor));
    }
    case SET_GAME_OVER: {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
