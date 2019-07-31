import { Color } from '../models/color.model';
import { GameState } from '../models/state.model';
import cloneDeep from 'lodash/cloneDeep';

/* CONFIGURATION */

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

export const setDiscsAmount = (number: number) => {
  return (5 * number + 1) * 2;
};

/* GAME */

export const isDiscPlayable = (state: GameState, nColumn: number) =>
  state.discsPlayed < state.discsAmount / 2 &&
  isColAvailable(state.boardGrid, nColumn);

export const isColAvailable = (boardGrid: any[], column: number) => {
  return boardGrid[column].indexOf(null) !== -1;
};

export const setCurrentPlayer = (playerColor: Color) => {
  return playerColor.startsWith('y') ? 'red' : 'yellow';
};

export const addDiscToBoard = (
  column: number,
  boardGrid: any[],
  currentPlayer: Color
) => {
  const boardCopy = cloneDeep(boardGrid);
  let i = boardCopy[column].length - 1;
  for (i; i >= 0; i--) {
    if (boardCopy[column][i] === null) {
      boardCopy[column][i] = currentPlayer;
      break;
    }
  }
  return boardCopy;
};

const boardUtils = {
  setEmptyBoard,
  setDiscsAmount,
  isDiscPlayable,
  isColAvailable,
  setCurrentPlayer,
  addDiscToBoard
};
export default boardUtils;
