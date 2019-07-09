import { GameState } from "../core/models/state.model";

export const updateObject = (
  oldObject: GameState,
  updatedValues: any
): GameState => {
  return {
    ...oldObject,
    ...updatedValues
  };
};
