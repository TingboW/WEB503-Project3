import React from 'react'
import { Navigate } from 'react-router-dom'

function Member(props) {
        return (
            props.redirect ? 
                <Navigate replace to="/" /> : <h1>Member Page</h1>
        )
    
}

export default Member;