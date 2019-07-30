import { Color as PlayerColor } from './color.model';
import { GameStatus } from './gameStatus.model';

export interface GameState {
  boardGrid: any[];
  boardSizeConfig: number;
  discsAmount: number;
  discsPlayed: number;
  currentPlayer: PlayerColor;
  gameStatus: GameStatus;
  player1: PlayerColor;
  player2: PlayerColor;
}
