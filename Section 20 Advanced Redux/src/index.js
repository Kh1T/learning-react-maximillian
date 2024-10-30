import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import store from "./store/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // This is how we can provide the data from the store to the app.
  <Provider store={store}> 
    <App />
  </Provider>
);
