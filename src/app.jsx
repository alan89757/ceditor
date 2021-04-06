import React from "react";
import { render  } from "react-dom";
import Router from "./router/index";

export default function App() {
  return (
    <Router />
  );
}

render(<App />, document.getElementById("root"));