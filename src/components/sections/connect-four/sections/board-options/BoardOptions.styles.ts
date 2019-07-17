import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(3)
    },
    fab: {
      backgroundColor: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: theme.palette.secondary.dark
      }
    }
  })
);

export default useStyles;
