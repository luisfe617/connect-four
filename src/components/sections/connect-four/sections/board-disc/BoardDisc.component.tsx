import React from 'react';

import useStyles from './BoardDisc.styles';
import { OwnProps as ParentProps } from '../board-panel/BoardPanel.component';

interface OwnProps extends ParentProps {
  x: number;
  y: number;
}

const BoardDisc = (props: OwnProps) => {
  const { x, y, boardGrid, currentPlayer, actions } = props;

  const classes = useStyles({
    nColumns: boardGrid.length,
    color: currentPlayer
  });

  const onClickHandler = () => actions.addDisc(y);

  const discClasses = () => [classes.disc, classes.discSize].join(' ');

  const innerDiscClasses = () => {
    const innerDiscClasses = [classes.discSize];
    if (boardGrid[y][x] !== null) {
      innerDiscClasses.push(
        boardGrid[y][x].startsWith('r') ? classes.redDisc : classes.yellowDisc
      );
    } else {
      innerDiscClasses.push(classes.whiteDisc);
    }
    return innerDiscClasses.join(' ');
  };

  return (
    <div className={discClasses()} onClick={onClickHandler}>
      <div className={innerDiscClasses()} />
    </div>
  );
};

export default BoardDisc;
