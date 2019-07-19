import { Color as PlayerColor } from './color.model';

export interface GameState {
  boardGrid: any[];
  boardSizeConfig: number;
  discsAmount: number;
  discsPlayed: number;
  currentPlayer: PlayerColor;
  player1: PlayerColor;
  player2: PlayerColor;
}
