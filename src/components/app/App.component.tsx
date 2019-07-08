import React, { FC } from 'react';

import { Provider as ReduxProvider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import rootReducer from '../../core/reducers/connect-four';

import AppRouting from './App.routing';
import theme from '../../styles/js/theme';

const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

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
