import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CInput } from '../../Components/CInput/CInput';
import './Register.css';
import { registerUser } from '../../services/apiCall'; 

export const Register = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        email: "",
        password_hash: ""
    });

    function handleChange(e) {
        setCredentials(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    async function handleRegister() { 
        try {
            const response = await registerUser(credentials); 
            if (response && response.success) { 
                navigate('/login');
            } else {
                alert(response?.message || 'Registro fallido'); 
            }

            console.log(response);
        } catch (error) {
            console.error('Error de registro:', error); 
        }
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card my-5">
                        <div className="card-body">
                            <h1 className="text-center mb-4">Register</h1>
                            <form>
                                <CInput
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    emitFunction={handleChange}
                                />
                                <CInput
                                    type="password"
                                    name="password_hash"
                                    placeholder="Contraseña"
                                    emitFunction={handleChange}
                                />
                                <button
                                    type="button"
                                    className="btn btn-danger btn-block"
                                    onClick={handleRegister} 
                                >
                                    Registrar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};