import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login } from '../Login/Login.jsx';
import { Home } from '../Home/Home.jsx';
import { NotFound } from '../NotFound/NotFound.jsx';
import { Services } from '../Services/Services.jsx';
import { Register } from '../Register/Register.jsx';
import { Profile } from '../Profile/Profile.jsx';
import { Appointments } from '../Appointments/Appointments.jsx';

export const Body = () => {
    return (
        <>
            <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/services" element={<Services />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/appointments" element={<Appointments />} />
            </Routes>
        </>
    )
}