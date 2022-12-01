import React, { useState } from 'react';
import "./Register.css"
import Logo from "./images/logo-ecom.png";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [inputError, setInputError] = useState();

    const register = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setInputError("Passwords do not match!");
        } else {
            auth.createUserWithEmailAndPassword(email, password)
                .then((auth) => {
                    if (auth) {
                        navigate('/')
                    }
                })
                .catch(error => alert(error.message))
        }

    }

    return (
        <div className="register">
            <Link to='/'>
                <img
                    className="register__logo"
                    src={Logo}
                    alt=""
                />
            </Link>
            <div className='register__container'>
                <h1>Register</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    <h5>Confirm Password</h5>
                    <input type='password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                    <span className="register__error">{inputError}</span>

                    {/* <button type='submit' onClick={register} className='login__signInButton'>Register</button> */}
                    <button onClick={register} className='register__registerButton'>Create your Ecom Account</button>
                </form>

                <p>
                    By registering-in you agree to the ECOM Conditions of Use & Sale.
                </p>
                <p>Have an account? <Link className="register__linkto" to='/login'>Sign in</Link></p>
            </div>
        </div>
    )
}

export default Register