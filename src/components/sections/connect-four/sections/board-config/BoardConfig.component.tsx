import React from 'react';

import { Typography } from '@material-ui/core';
import Slider from '@material-ui/lab/Slider';

import useStyles from './BoardConfig.styles';

interface OwnProps {
  boardSizeConfig: number | number[];
  onChange: (event: any, value: number | number[]) => void;
}

const BoardConfig = (props: OwnProps) => {
  const classes = useStyles();

  return (
    <div className={classes.boardConfigContainer}>
      <Typography align="center" variant="body1">
        Select the board size
      </Typography>
      <div className={classes.sliderContainer}>
        <Slider
          defaultValue={props.boardSizeConfig}
          valueLabelFormat={sliderTextValue}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="on"
          step={1}
          min={4}
          max={10}
          onChangeCommitted={props.onChange}
          className={classes.slider}
        />
      </div>
    </div>
  );
};

function sliderTextValue(value: number) {
  // (2N-1) columns x (N*2) rows
  return `${2 * value - 1}x${value + 2}`;
}

export default BoardConfig;
