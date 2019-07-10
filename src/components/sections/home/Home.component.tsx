import React from 'react';

import { Button } from '@material-ui/core';

import useStyles from './Home.styles';
import logoImage from '../../../assets/images/logo.svg';
import AdapterLink from '../../../core/common/components/AdapterLink';
import SharedStructure from '../../shared/shared-structure/SharedStructure.component';

const Home = () => {
  const classes = useStyles();

  return (
    <SharedStructure>
      <img
        alt='Connect Four logo'
        className={classes.gameIcon}
        src={logoImage}
      />
      <Button
        variant='contained'
        color='secondary'
        className={classes.link}
        component={AdapterLink}
        to='/board-config'
      >
        Start
      </Button>
    </SharedStructure>
  );
};

export default Home;
