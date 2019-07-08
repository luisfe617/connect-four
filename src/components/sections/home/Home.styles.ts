import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    homeContainer: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '100%',
      position: 'absolute',
      width: '100%'
    },
    gameIcon: {
      height: '30vh',
      margin: 0,
      padding: 0,
      position: 'relative',
      userSelect: 'none',
      width: '80vw',
      '@media (min-width:768px)': {
        height: '50vh',
        width: '35vw'
      }
    },
    link: {
      fontWeight: 'bold',
      margin: theme.spacing(5),
      textDecoration: 'none'
    }
  })
);

export default useStyles;
