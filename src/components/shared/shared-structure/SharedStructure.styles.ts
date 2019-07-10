import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    gameContainer: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '100%',
      position: 'absolute',
      width: '100%'
    }
  })
);

export default useStyles;
