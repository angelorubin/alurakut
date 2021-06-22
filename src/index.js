import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import ReactDOM from "react-dom";
import { App } from "./app";
// import { GlobalStyle } from "./global-style.js";
import { Provider } from "react-redux";
// Redux Store
import store from "./store";
import { theme } from "themes/default";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.querySelector("#root")
);
