import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("potato"));

export { default as Home } from './Home';
export { default as User } from './User';
export { default as Care } from './Care';
export { default as Danger } from './Danger';
