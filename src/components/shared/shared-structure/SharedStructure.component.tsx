import React from 'react';
import useStyles from './SharedStructure.styles';

const SharedStructure = (props: any) => {
  const classes = useStyles();

  return <div className={classes.gameContainer}>{props.children}</div>;
};

export default SharedStructure;
