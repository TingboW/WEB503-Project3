import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';
import UpdateProfile from './components/UpdateProfile/UpdateProfile';
import Users from './components/Users/Users';
import TodoList from './components/TodoList'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Route exact path='/' component={Home} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/todolist' component={TodoList} />
        <Route exact path='/user-update' component={UpdateProfile} />
        <Route exact path='/users' component={Users} />
      </BrowserRouter>
    </>
  );
};

export default App;