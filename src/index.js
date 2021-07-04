import React from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "@material-ui/core/styles";
import ReactDOM from "react-dom";
import { App } from "./app";
import { Provider } from "react-redux";

// Global Style
// import { GlobalStyle } from "./global-style";

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
            href="https://fonts.googleapis.com/css2?family=Poppins&family=Roboto&display=swap"
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
