import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CSurfer } from '../CSurfer/CSurfer';
import './Header.css';

export const Header = () => {

    const navigate = useNavigate();

    const passport = JSON.parse(localStorage.getItem('passport'));
    const token = passport ? passport.token : null;
    const role = passport ? passport.tokenData.role_id : null;

    const handleLogout = () => {
        localStorage.removeItem('passport');
         navigate('/login');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container d-flex justify-content-between">
                <a className="navbar-brand text-white display-4" href="#">Tattoo Studio</a>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <CSurfer path="/" content="Home" />
                        </li>
                        <li className="nav-item">
                            <CSurfer path="/services" content="Services" />
                        </li>
                        <li className="nav-item">
                            <CSurfer path="/profile" content="Profile" />
                        </li>
                        <li className="nav-item">
                            <CSurfer path="/appointments" content="Appointments" />
                        </li>
                        <li className="nav-item">
                            <CSurfer path="/login" content="Login" />
                        </li>
                        <li className="nav-item">
                            <CSurfer path="/register" content="Register" />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}