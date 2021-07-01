import React from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "@material-ui/core/styles";
import ReactDOM from "react-dom";
import { App } from "./app";
// import { GlobalStyle } from "./global-style.js";
import { Provider } from "react-redux";

// Redux Store
import store from "./store";

// Theme
import { theme } from "themes/default";

// Material-UI Reset
import CssBaseline from "@material-ui/core/CssBaseline";

// Router
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.querySelector("#root")
);
