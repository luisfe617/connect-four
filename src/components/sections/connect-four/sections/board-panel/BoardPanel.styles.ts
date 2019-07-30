import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    boardContainer: {
      background: `linear-gradient(to right, #7474BF, #348AC7)`,
      borderColor: theme.palette.primary.dark,
      borderStyle: 'solid',
      borderRightColor: theme.palette.primary.light,
      borderLeftColor: theme.palette.primary.light,
      boxShadow: '0 0 30px #ccc',
      boxSizing: 'border-box',
      display: 'flex',
      maxWidth: '90vw',
      overflow: 'hidden',
      '@media (min-width:768px)': {
        borderWidth: theme.spacing(1),
        maxWidth: '55vw',
        padding: theme.spacing(1)
      }
    },
    boardColumn: (props: any) => ({
      maxWidth: '50px',
      width: `calc(90vw / ${props.nColumns})`,
      '&:hover': {
        opacity: 0.7
      },
      '@media (min-width:768px)': {
        maxWidth: '70px',
        width: `calc(55vw / ${props.nColumns})`
      }
    })
  })
);

export default useStyles;
