import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CSurfer } from '../CSurfer/CSurfer.jsx';

export const Header = () => {
    const navigate = useNavigate();

    const passport = JSON.stringify(localStorage.getItem("passport"))
    const token = passport.token

    return (
        <>
            <div className='flex justify-space-between'>
                <CSurfer path="/" content="Home" />
                <CSurfer path="/services" content="Services" />
                <CSurfer path="/profile" content="Profile" />
                <CSurfer path="/appointments" content="Appointments" />
                <div onClick={() => navigate('/login')}>Login</div>
                <CSurfer path="/register" content="Register" />
            </div>
        </>
    )
}