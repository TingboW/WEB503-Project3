import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import logo from '../logo.svg';
import '../App.css';
import axios from 'axios'

class Navbar extends Component {

    logout = (event) => {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
          console.log(response.data)
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              username: null
            })
            //call the method/handler and pass updated state data
            this.props.redirectURL(true);
          }
        }).catch(error => {
            console.log('Logout error')
        })
      }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);

        const logo = {
            width: 100
        }
        
        return (
            <div>
                <header className="navbar App-header" id="nav-container">
                <div className="col-4 col-mr-auto">
                    <div id="top-filler"></div>
                        <img
                            src="https://user-images.githubusercontent.com/10260230/93533501-53aa0d80-f943-11ea-90d1-e6e70eca2e29.gif"
                            style={logo} 
                            className="" 
                            alt="logo" 
                        />
                        <h1 className="App-title">My APP</h1>
                    </div>
                    
                    <div className="col-4 nav" >
                        {loggedIn ? (
                            <section className="navbar-section">
                                <Link to="#" className="nav-item btn" onClick={this.logout}>
                                <span className="nav-link text-white">logout</span></Link>

                            </section>
                        ) : (
                            <section className="navbar-section">
                                <Link to="/" className="nav-item btn">
                                    <span className="nav-link text-white">home</span>
                                    </Link>
                                <Link to="/login" className="nav-item btn">
                                <span className="nav-link text-white">login</span>
                                    </Link>
                                <Link to="/signup" className="nav-item btn">
                                <span className="nav-link text-white">sign up</span>
                                    </Link>
                            </section>
                            )}
                    </div>
                    
                </header>
            </div>

        );
        
    }
}

export default Navbar