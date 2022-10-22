import React, { Component } from 'react'

class Home extends Component {
    
    render() {
        const imageStyle = {
            width: 900
        }
        return (
            <div>
                <main>
                    <h3 className="mt-5 mb-5">You are home</h3>
                    <img 
                        style={imageStyle} 
                        src="https://www.rd.com/wp-content/uploads/2020/09/GettyImages-841380450.jpg" 
                        alt="Home Picture"
                    />
                </main>
                <footer className="mt-5 mb-5">
                    Copyright 2022
                </footer>
            </div>
        )

    }
}

export default Home
