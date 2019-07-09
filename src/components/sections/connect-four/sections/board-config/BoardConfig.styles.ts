import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    boardConfigContainer: {
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      height: "100%",
      position: "absolute",
      width: "100%"
    },
    title: {
      marginBottom: theme.spacing(5)
    },
    containedBtn: {
      fontWeight: "bold"
    },
    sliderContainer: {
      marginTop: theme.spacing(2),
      width: "60vw",
      "@media (min-width: 768px)": {
        width: "30vw"
      }
    },
    slider: {
      marginTop: theme.spacing(6),
      "&.MuiSlider-root": {
        color: theme.palette.secondary.dark,
        height: 3,
        padding: "13px 0"
      },
      "& .MuiSlider-thumb": {
        height: 27,
        marginTop: -12,
        marginLeft: -13,
        width: 27
      },
      "& .MuiSlider-track": {
        height: 3
      },
      "& .MuiSlider-rail": {
        color: theme.palette.secondary.light,
        opacity: 1,
        height: 3
      },
      "& .MuiSlider-valueLabel": {
        fontSize: "0.65rem",
        left: "calc(-50% + 10px)"
      },
      "& .MuiSlider-thumb .MuiSlider-valueLabel": {
        transform: "scale(1.3) translateY(-10px)"
      }
    }
  })
);

export default useStyles;
