import React, { useState } from 'react';
import { registerUser } from '../../services/apiCall.js';
import { useNavigate } from 'react-router-dom';
import "./Register.css";

export const Register = () => {
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState(
        {
            email: "",
            password_hash: ""
        }
    )
    function handleChange(e) {
        console.log('Handle Change')
        setCredentials((prevState) => (
            {
                ...prevState,
                [e.target.name]: e.target.value
            }
        ))
    }
    async function register() {
        try {
            console.log(credentials);
            const response = await registerUser(credentials)
            if (response.success) {
                navigate('/login')
            } else {
                alert(response.message)
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="register-page">
            <div className="register-box">
                <h1>Register</h1>
                <h2>
                    Create an account or <NavLink to="/login">login</NavLink>
                </h2>

                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    onChange={handleChange}
                />
                <input
                    type="button"
                    value="Register"
                    onClick={register}
                />
            </div>
        </div>
    );
};