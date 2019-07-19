import React from 'react';

import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import store from '../../store/configureStore';
import theme from '../../assets/styles/js/theme';
import useStyles from './App.styles';
import ConnectFourComponent from '../sections/connect-four/parent/ConnectFour.component';

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <div className={classes.appContainer}>
            <ConnectFourComponent />
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    </ReduxProvider>
  );
};

export default App;
