export interface GameState {
  boardGrid: any[];
  boardSizeConfig: number;
  discsAmount: number;
  currentPlayer: "red" | "yellow";
}
