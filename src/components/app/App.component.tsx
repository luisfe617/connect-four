import React, { FC } from 'react';

import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppRouting from './App.routing';
import theme from '../../assets/styles/js/theme';

import store from '../../store/configureStore';

const App: FC = () => {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <AppRouting />
        </MuiThemeProvider>
      </BrowserRouter>
    </ReduxProvider>
  );
};

export default App;
