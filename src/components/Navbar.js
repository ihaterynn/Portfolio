// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import cloudImage from '../assets/cloud.png'; // Import the cloud image

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <NavLink to="/" className="nav-button">
                    Ryan
                </NavLink>
            </div>
            <div className="navbar-center">
                <NavLink
                    to="/projects"
                    className="nav-link"
                    style={({ isActive }) => ({
                        backgroundImage: isActive ? `url(${cloudImage})` : 'none',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center -4px', // Keep the cloud at the desired position
                        backgroundSize: 'cover',
                        paddingTop: isActive ? '35px' : '15px', // Add extra top padding when active
                        paddingBottom: '15px', // Maintain bottom padding
                        paddingLeft: '15px',
                        paddingRight: '15px',
                    })}
                >
                    Projects
                </NavLink>
                <span className="divider">|</span>
                <NavLink
                    to="/hobbies"
                    className="nav-link"
                    style={({ isActive }) => ({
                        backgroundImage: isActive ? `url(${cloudImage})` : 'none',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center -4px', // Keep the cloud at the desired position
                        backgroundSize: 'cover',
                        paddingTop: isActive ? '35px' : '15px', // Add extra top padding when active
                        paddingBottom: '15px', // Maintain bottom padding
                        paddingLeft: '15px',
                        paddingRight: '15px',
                    })}
                    
                >
                    Hobbies
                </NavLink>
                <span className="divider">|</span>
                <NavLink
                    to="/connect"
                    className="nav-link"
                    style={({ isActive }) => ({
                        backgroundImage: isActive ? `url(${cloudImage})` : 'none',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center -4px', // Keep the cloud at the desired position
                        backgroundSize: 'cover',
                        paddingTop: isActive ? '35px' : '15px', // Add extra top padding when active
                        paddingBottom: '15px', // Maintain bottom padding
                        paddingLeft: '15px',
                        paddingRight: '15px',
                    })}
                >
                    Connect
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
