import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
// import "./index.css";
import * as serviceWorker from "./serviceWorker";

import configureStore from "./configureStore";
var { registerObserver } = require("react-perf-devtool");

registerObserver();

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
