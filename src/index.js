// index.js

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css"; // optional, if you want to include global styles

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
