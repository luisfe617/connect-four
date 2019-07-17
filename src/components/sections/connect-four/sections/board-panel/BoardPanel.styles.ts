import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    boardContainer: {
      display: 'flex',
      background: `linear-gradient(to right, #7474BF, #348AC7)`,
      borderColor: theme.palette.primary.dark,
      borderStyle: 'solid',
      borderRightColor: theme.palette.primary.light,
      borderLeftColor: theme.palette.primary.light,
      borderWidth: theme.spacing(1),
      boxShadow: '0 0 30px #ccc',
      boxSizing: 'border-box',
      padding: theme.spacing(1),
      maxWidth: '90vw',
      '@media (min-width:768px)': {
        maxWidth: '55vw'
      },
      overflow: 'hidden'
    },
    boardColumn: (props: any) => ({
      '&:hover': {
        opacity: 0.7
      },
      maxWidth: '50px',
      width: `calc(90vw / ${props.nColumns})`,
      '@media (min-width:768px)': {
        maxWidth: '70px',
        width: `calc(55vw / ${props.nColumns})`
      }
    })
  })
);

export default useStyles;
