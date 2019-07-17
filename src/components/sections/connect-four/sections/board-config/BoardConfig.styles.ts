import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    configTitle: {
      fontFamily: 'Bungee Shade',
      fontSize: '2.5rem',
      marginBottom: theme.spacing(5),
      textTransform: 'uppercase',
      '@media(min-width:768px)': {
        fontSize: '3rem'
      }
    },
    configNextBtn: {
      fontWeight: 'bold',
      marginTop: theme.spacing(5)
    },
    sliderContainer: {
      marginTop: theme.spacing(2),
      width: '60vw',
      '@media (min-width: 768px)': {
        width: '30vw'
      }
    },
    slider: {
      '& .MuiSlider-thumb .MuiSlider-valueLabel': {
        transform: 'scale(1.3) translateY(-10px)'
      }
    },
    sliderRoot: {
      marginTop: theme.spacing(6),
      color: theme.palette.secondary.dark,
      height: 3,
      padding: '13px 0'
    },
    sliderThumb: {
      height: 27,
      marginTop: -12,
      marginLeft: -13,
      width: 27
    },
    sliderTrack: {
      height: 3
    },
    sliderRail: {
      color: theme.palette.secondary.light,
      opacity: 1,
      height: 3
    },
    sliderValueLabel: {
      fontSize: '0.65rem',
      left: 'calc(-50% + 10px)'
    },
    sliderMark: {
      backgroundColor: 'yellow'
    }
  })
);

export default useStyles;
