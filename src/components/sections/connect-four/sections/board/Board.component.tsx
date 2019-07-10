import React from "react";

import { Fab } from "@material-ui/core";
import ArrowBack from "@material-ui/icons/ArrowBack";

import useStyles from "./Board.styles";
import SharedStructure from "../../../../shared/shared-structure/SharedStructure.component";

const Board = () => {
  const classes = useStyles();

  return (
    <SharedStructure>
      <Fab color="secondary" aria-label="Go back" className={classes.backArrow}>
        <ArrowBack />
      </Fab>
    </SharedStructure>
  );
};

export default Board;
