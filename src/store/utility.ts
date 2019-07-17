import { Color } from '../core/models/color.model';
import { GameState } from '../core/models/state.model';
import cloneDeep from 'lodash/cloneDeep';

export const updateObject = (
  oldObject: GameState,
  updatedValues: any
): GameState => {
  return {
    ...cloneDeep(oldObject),
    ...cloneDeep(updatedValues)
  };
};

export const setDiscsAmount = (number: number) => {
  return 5 * number + 1;
};

export const setCurrentPlayer = (playerColor: Color) => {
  return playerColor.startsWith('y') ? 'red' : 'yellow';
};

export const setEmptyBoard = (number: number = 4) => {
  const nColumns = 2 * number - 1;
  const nRows = number + 2;
  const board = [];
  for (let i = 0; i < nColumns; i++) {
    board.push(new Array(nRows));
    for (let j = 0; j < nRows; j++) {
      board[i][j] = null;
    }
  }
  return board;
};

export const isColAvailable = (boardGrid: any[], col: number) => {
  return boardGrid[col].indexOf(null) !== -1;
};

export const addDiscToBoard = (
  col: number,
  boardGrid: any[],
  currentPlayer: Color
) => {
  const boardCopy = cloneDeep(boardGrid);
  let i = boardCopy[col].length - 1;
  for (i; i >= 0; i--) {
    if (boardCopy[col][i] === null) {
      boardCopy[col][i] = currentPlayer;
      break;
    }
  }
  return boardCopy;
};
