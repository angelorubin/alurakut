import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyle } from "./global-style.js";
import { App } from "./App";
import { Provider } from "react-redux";

// Redux Store
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.querySelector("#root")
);
