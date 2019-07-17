import { GameState } from '../../core/models/state.model';
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
} from '../actions/actionTypes';
import {
  updateObject,
  addDiscToBoard,
  setDiscsAmount,
  setCurrentPlayer,
  setEmptyBoard
} from '../utility';

const initialState: GameState = {
  boardGrid: setEmptyBoard(4),
  boardSizeConfig: 4,
  discsAmount: 42,
  discsPlayed: 0,
  currentPlayer: 'red',
  player1: 'red',
  player2: 'yellow'
};

const reducer = (state = initialState, action: ConnectFourTypes): GameState => {
  switch (action.type) {
    case ADD_DISC: {
      return updateObject(state, {
        boardGrid: addDiscToBoard(
          action.payload.col,
          state.boardGrid,
          state.currentPlayer
        )
      } as GameState);
    }
    case SET_BOARD_GRID_EMPTY: {
      return updateObject(state, {
        boardGrid: setEmptyBoard(action.payload.number)
      } as GameState);
    }
    case SET_BOARD_CONFIG_NUMBER: {
      return updateObject(state, {
        boardSizeConfig: action.payload.number
      } as GameState);
    }
    case SET_DISCS_NUMBER: {
      return updateObject(state, {
        discsAmount: setDiscsAmount(action.payload.number)
      } as GameState);
    }
    case INCREMENT_DISCS_PLAYED_NUMBER: {
      return {
        ...state,
        discsPlayed: state.discsPlayed + 1
      };
    }
    case SET_CURRENT_PLAYER: {
      return updateObject(state, {
        currentPlayer: setCurrentPlayer(action.payload.playerColor)
      } as GameState);
    }
    case SET_GAME_OVER: {
      return state;
    }
    case RESTART_GAME: {
      return {
        ...initialState
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
