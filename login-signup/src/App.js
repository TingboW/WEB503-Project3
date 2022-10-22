import React, { Component } from 'react';
import axios from 'axios'
import { Routes,Route } from 'react-router-dom'
// components
import Signup from './components/sign-up'
import LoginForm from './components/login-form'
import Navbar from './components/navbar'
import Home from './components/home'
import Member from './components/member'

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null,
      redirect: false
    }

    //this.getUser = this.getUser.bind(this)
    //this.componentDidMount = this.componentDidMount.bind(this)
    //this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount = () => {
    this.getUser()
  }

  updateUser = (userObject) => {
    this.setState(userObject)
  }

  getUser = () => {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  redirectURL = (updatedValue) => {
    this.setState({redirect: updatedValue})
  }

  render() {
    return (
      <div className="App">
   
        <Navbar 
          updateUser={this.updateUser} 
          loggedIn={this.state.loggedIn} 
          redirect={this.state.redirect} 
          redirectURL={this.redirectURL} 
        />
        {/* greet user if logged in: */}
        {this.state.loggedIn &&
          <p className="mt-5 mb-4">Welcome back, {this.state.username}!</p>
        }
        {/* Routes to different components */}
        <Routes>
          <Route
            exact path="/"
            element={<Home />} />
          <Route
            path="/login"
            element={
              <LoginForm
                updateUser={this.updateUser}
              />}
          />
          <Route
            path="/signup"
            element={<Signup />}
          />
          <Route
            path="/member"
            element={<Member redirect={this.state.redirect} />} />
        </Routes>
      </div>
    );
  }
}

export default App;
