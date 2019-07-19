import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { red, yellow } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    discSize: (props: any) => ({
      borderRadius: ' 50%',
      maxHeight: '50px',
      maxWidth: '50px',
      margin: 0,
      padding: 0,
      height: `calc(85vw / ${props.nColumns})`,
      width: `calc(85vw / ${props.nColumns})`,
      '@media(min-width: 768px)': {
        maxHeight: '70px',
        maxWidth: '70px',
        height: `calc(50vw / ${props.nColumns})`,
        width: `calc(50vw / ${props.nColumns})`
      }
    }),
    disc: (props: any) => ({
      extend: 'discSize',
      alignItems: 'center',
      backgroundColor: 'white',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      margin: '0 auto',
      padding: 0,
      transform: 'scale(0.9)',
      '&:hover': {
        backgroundColor: getDiscColor(props.color),
        transition: 'all 250ms ease-in-out'
      }
    }),
    whiteDisc: {
      background: ' transparent'
    },
    redDisc: {
      background: red['900'],
      animationName: '$discIn',
      animationDuration: '300ms',
      animationIterationCount: '1'
    },
    yellowDisc: {
      backgroundColor: yellow['600'],
      animationName: '$discIn',
      animationDuration: '300ms',
      animationIterationCount: '1'
    },
    '@keyframes discIn': {
      from: {
        transform: 'translateY(-500px)'
      },
      to: {
        transform: 'translateY(0px)'
      }
    }
  })
);

const getDiscColor = (color: string) => {
  switch (color.toLowerCase()) {
    case 'yellow':
      return yellow['600'];
    default:
      return red['900'];
  }
};

export default useStyles;
