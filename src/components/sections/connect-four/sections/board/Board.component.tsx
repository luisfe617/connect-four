import React from 'react';

import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import Refresh from '@material-ui/icons/RefreshRounded';

import SharedStructure from '../../../../shared/shared-structure/SharedStructure.component';
import BoardPanel from '../board-panel/BoardPanel.component';
import useStyles from './Board.styles';

const Board = (props: any) => {
  const classes = useStyles();

  const { history, actions } = props;

  const handleGoBack = () => {
    history.goBack();
    actions.restartGame();
  };

  return (
    <SharedStructure>
      <BoardPanel {...props} />
      <Tooltip title='Restart game' aria-label='Restart game'>
        <Fab
          color='secondary'
          className={classes.absolute}
          onClick={handleGoBack}
          onTouchEnd={handleGoBack}
        >
          <Refresh />
        </Fab>
      </Tooltip>
      {/* <BoardOptionsBtn {...props} /> */}
    </SharedStructure>
  );
};

export default Board;
