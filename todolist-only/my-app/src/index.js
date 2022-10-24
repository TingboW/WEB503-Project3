import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import TodoList from "./components/TodoList";
import { BrowserRouter } from 'react-router-dom' //don't need to specify localhost url in axios http address
import * as serviceWorker from './serviceWorker';
import store from './redux/store/store';

ReactDOM.render(
  <BrowserRouter>
    <TodoList />
  </BrowserRouter>, 
  document.querySelector("#root")
); 

/* ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
); */