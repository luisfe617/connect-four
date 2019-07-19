import React from 'react';

import { Typography, Button } from '@material-ui/core';
import Slider from '@material-ui/lab/Slider';

import useStyles from './BoardConfig.styles';
import AdapterLink from '../../../../../core/common/components/AdapterLink';
import SharedStructure from '../../../../shared/shared-structure/SharedStructure.component';

interface OwnProps {
  boardSize: number | number[];
  onChange: (value: number | number[]) => void;
}

const BoardConfig = (props: OwnProps) => {
  const classes = useStyles();

  const onChangeHandler = (event: any, value: number | number[]) => {
    if (props.boardSize !== value) {
      props.onChange(value);
    }
  };

  return (
    <SharedStructure>
      <Typography align='center' variant='h1' className={classes.configTitle}>
        Connect 4
      </Typography>
      <Typography align='center' variant='body1'>
        Select the board size
      </Typography>
      <div className={classes.sliderContainer}>
        <Slider
          defaultValue={props.boardSize}
          valueLabelFormat={sliderTextValue}
          aria-labelledby='discrete-slider'
          valueLabelDisplay='on'
          step={1}
          min={4}
          max={10}
          onChangeCommitted={onChangeHandler}
          className={classes.slider}
          classes={{
            root: classes.sliderRoot,
            thumb: classes.sliderThumb,
            track: classes.sliderTrack,
            rail: classes.sliderRail,
            valueLabel: classes.sliderValueLabel
          }}
        />
      </div>
      <Button
        variant='contained'
        color='secondary'
        to='/game-board'
        className={classes.configNextBtn}
        component={AdapterLink}
      >
        Start
      </Button>
    </SharedStructure>
  );
};

function sliderTextValue(value: number) {
  // (2N-1) columns x (N*2) rows
  return `${2 * value - 1}x${value + 2}`;
}

export default BoardConfig;
