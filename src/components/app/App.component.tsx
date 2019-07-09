import React, { FC } from "react";

import { createStore, applyMiddleware } from "redux";
import { Provider as ReduxProvider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { BrowserRouter } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import rootReducer from "../../store/reducers/connect-four";

import AppRouting from "./App.routing";
import theme from "../../styles/js/theme";

const middlewares = [thunkMiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares);

const enhancers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);

const store = createStore(rootReducer, undefined, composedEnhancers);

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
