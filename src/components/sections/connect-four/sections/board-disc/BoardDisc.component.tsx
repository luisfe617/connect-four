import React from 'react';

import useStyles from './BoardDisc.styles';

const BoardDisc = (props: any) => {
  const { x, y, boardGrid, currentPlayer, onDiscAdded } = props;

  const classes = useStyles({
    nColumns: boardGrid.length,
    color: currentPlayer
  });

  const onClickHandler = () => onDiscAdded(y);

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
