import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      margin: theme.spacing(2)
    },
    fabPosition: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(3)
    },
    gameStatus: {
      marginBottom: theme.spacing(5),
      width: '340px'
    },
    discsInfo: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around'
    }
  })
);

export default useStyles;
