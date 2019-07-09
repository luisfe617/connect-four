import { GameState } from "../core/models/state.model";

export const updateObject = (oldObject: GameState, updatedValues: any) => {
  return {
    ...oldObject,
    ...updatedValues
  };
};
