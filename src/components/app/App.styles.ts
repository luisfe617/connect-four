import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appContainer: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      display: 'flex',
      height: '100vh',
      position: 'relative',
      width: '100vw'
    }
  })
);

export default useStyles;
