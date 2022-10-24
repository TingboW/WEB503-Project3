import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import NavApp from "./NavApp"
import { BrowserRouter } from 'react-router-dom' //don't need to specify localhost url in axios http address

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, 
  document.querySelector("#root")
);