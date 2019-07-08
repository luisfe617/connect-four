import { createMuiTheme } from '@material-ui/core/styles';

const primaryColor = {
  main: '#282c34'
};

const themeConfiguration = createMuiTheme({
  palette: {
    type: 'light'
  },
  typography: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: 16,
    color: primaryColor,
    useNextVariants: true,
    h1: {
      fontSize: '2.5rem',
      fontWeight: '700'
    },
    h2: {
      fontSize: '2rem',
      fontWeight: '700'
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: '700'
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: '400'
    },
    body1: {
      fontSize: '1rem',
      fontWeight: '400'
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: '400',
      lineHeight: 1
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: '400',
      lineHeight: 1.5
    }
  }
});

export default themeConfiguration;
