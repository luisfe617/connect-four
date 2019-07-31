import React from 'react';

import useStyles from './BoardPanel.styles';
import BoardDisc from '../board-disc/BoardDisc.component';
import { OwnProps as ParentProps } from '../board/Board.component';

const BoardPanel = (props: ParentProps) => {
  const classes = useStyles({ nColumns: props.boardGrid.length });

  return (
    <div className={classes.boardContainer}>
      {props.boardGrid.map((column: any, y: number) => {
        return (
          <div key={`column-${y}`} className={classes.boardColumn}>
            {column.map((row: any, x: number) => (
              <BoardDisc key={`row-${x}-${y}`} x={x} y={y} {...props} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default BoardPanel;
