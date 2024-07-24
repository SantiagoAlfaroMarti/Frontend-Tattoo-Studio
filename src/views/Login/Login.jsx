import React, { useState } from 'react';
import { CInput } from '../../components/CInput/CInput';
import { loginUser } from '../../services/apiCalls';
import { jwtDecode } from 'jwt-decode';
import { isTokenValid } from '../../components/utils/function';

export const Login = () => {
    const [credentials, setCredentials] = useState(
        {
            email: "",
            password_hash: ""
        }
    )
    function handleChange(e) {
        console.log('handleChange');
        setCredentials(prevState => (
            {
                ...prevState,
                [e.target.name]: e.target.value
            }
        ))
    }
    async function login() {
        console.log("login");
        console.log(credentials);
        try {
            const response = await loginUser(credentials);
            if (response.success) {
                const decodedToken = jwtDecode(response.token)
                const passport = {
                    token: response.token,
                    tokenData: decodedToken
                }
                localStorage.setItem("passport", JSON.stringify(passport));
                isTokenValid(decodedToken.exp);
            } else {
                console.log(response);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <h1>Login</h1>
            <div>
                <CInput type="email"
                    name="email"
                    placeholder="Email"
                    emitFunction={handleChange}
                />
            </div>
            <div><CInput
                type="password"
                name="password_hash"
                placeholder="Password"
                emitFunction={handleChange}
            />
            </div>
            <div>
                <input
                    type="button"
                    value="Login"
                    onClick={login}
                />
            </div>
        </>
    )
}