import React, { useState } from 'react';
import './Login.css';
import Logo from "./images/logo-ecom.png";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";


function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                navigate('../', { replace: true })
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src={Logo}
                    alt=""
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the ECOM Conditions of Use & Sale.
                </p>
                <p> Don't have an account? <Link to='/Register'>Register</Link></p>
            </div>
        </div>
    )
}

export default Login