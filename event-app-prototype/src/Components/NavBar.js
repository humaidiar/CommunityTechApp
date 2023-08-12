import React from 'react'
import { Link } from 'react-router-dom';
import '../Style/NavBar.css'
import logo from '../Images/image.png'


const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="left-section">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="title">
                    <h1>Connect</h1>
                </div>
            </div>
            <div className="right-section">
                <ul className="nav-list">
                    <li><Link to="/">Browser Catagories</Link></li>
                    <li className='sign-up-btn'><Link to="/signup">Sign Up</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar

// https://swiperjs.com/demos