import React from 'react';

import SharedStructure from '../../../../shared/shared-structure/SharedStructure.component';
import BoardPanel from '../board-panel/BoardPanel.component';
import BoardOptionsBtn from '../board-options/BoardOptions.component';
import {
  ConnectedState,
  ConnectedDispatch
} from '../../parent/ConnectFour.component';

const Board = (props: ConnectedState & ConnectedDispatch) => {
  return (
    <SharedStructure>
      <BoardPanel {...props} />
      <BoardOptionsBtn {...props} />
    </SharedStructure>
  );
};

export default Board;
