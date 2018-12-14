import React from 'react'
import './Logo.css'
import {NavLink} from 'react-router-dom'
const logo = (props) => {
    return (
        <NavLink to="/">
            <img src = "http://localhost:8080/api/cookurself-logo.png" alt="Our page logo" className="logo-img"/>
        </NavLink>
    )
}

export default logo;