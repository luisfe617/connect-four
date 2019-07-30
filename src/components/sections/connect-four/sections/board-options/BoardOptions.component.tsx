import React from 'react';
import { History } from 'history';

import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import EditIcon from '@material-ui/icons/Edit';
import Refresh from '@material-ui/icons/RefreshRounded';

import useStyles from './BoardOptions.styles';

interface OwnProps {
  history: History;
  actions: {
    restartGame: () => void;
  };
}

const BoardOptionsBtn = (props: OwnProps) => {
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();
  const { history, actions } = props;

  const handleClick = () => setOpen(!open);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleGoBack = () => {
    history.goBack();
    actions.restartGame();
  };

  const speedDialActions = [
    { icon: <Refresh onClick={handleGoBack} />, name: 'Restart game' }
  ];
  return (
    <SpeedDial
      ariaLabel='options'
      classes={{
        root: classes.root,
        fab: classes.fab
      }}
      icon={<SpeedDialIcon openIcon={<EditIcon />} />}
      onBlur={handleClose}
      onClick={handleClick}
      onClose={handleClose}
      onFocus={handleOpen}
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
      open={open}
    >
      {speedDialActions.map(action => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          tooltipOpen
          onClick={handleClick}
        />
      ))}
    </SpeedDial>
  );
};

export default BoardOptionsBtn;
