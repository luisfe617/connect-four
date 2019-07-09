import React from "react";

import { Button } from "@material-ui/core";

import AdapterLink from "../../../core/common/components/AdapterLink";
import logoImage from "../../../assets/images/logo.svg";
import useStyles from "./Home.styles";

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.homeContainer}>
      <img
        alt="Connect Four logo"
        className={classes.gameIcon}
        src={logoImage}
      />
      <Button
        variant="contained"
        color="secondary"
        className={classes.link}
        component={AdapterLink}
        to="/game-config"
      >
        Start Game
      </Button>
    </div>
  );
};

export default Home;
