import { GameState } from '../models/state.model';
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

const objUtils = {
  updateObject
};
export default objUtils;
