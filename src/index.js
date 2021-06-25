import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import ReactDOM from "react-dom";
import { App } from "./app";
import { GlobalStyle } from "./global-style.js";
import { Provider } from "react-redux";
// Redux Store
import store from "./store";
import { theme } from "themes/default";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Helmet } from "react-helmet";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <CssBaseline />
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.querySelector("#root")
);
