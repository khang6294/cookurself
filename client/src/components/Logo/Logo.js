import React from 'react'
import './Logo.css'
import {NavLink} from 'react-router-dom'
const logo = (props) => {
    return (
        <NavLink to="/">
            <img src = {`${window.location.origin}/api/cookurself-logo.png`} alt="Our page logo" className="logo-img"/>
        </NavLink>
    )
}

export default logo;