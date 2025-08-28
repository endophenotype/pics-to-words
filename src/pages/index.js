import React from "react";
import ReactDOM from "react-dom/client";

import "../style.css";
import App from "../App.jsx";
import { getWords, results } from "../data";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App getWords={getWords} results={results} />
  </React.StrictMode>,
);
