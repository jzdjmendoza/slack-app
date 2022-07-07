import React, { useState, useContext } from "react";
import SessionContext from "../contexts/SessionContext";
import log from '../log.svg'
import register from '../register.svg'

const LogInRegister = () => {

    // const
    const [isRegisterMode, setIsRegisterMode] = useState(false);
    const toggleForm = () => {
        setIsRegisterMode(!isRegisterMode);
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    const { setSession } = useContext(SessionContext)

    const login = (event: any) => {
        event.preventDefault()

        const endpoint = 'https://cors-anywhere.herokuapp.com/206.189.91.54/api/v1/auth/sign_in'
        const method = 'POST'
        const headers = { 'Content-Type': 'application/json' }
        const body = JSON.stringify({ email, password })

        fetch(endpoint, { method, headers , body })
            .then(response => {
                if(response.status == 200) {
                    setSession({
                        accessToken: response.headers.get('access-token'),
                        client: response.headers.get('client'),
                        uid: response.headers.get('uid'),
                        expiry: response.headers.get('expiry')
                    })
                } else {
                    //Put Error Message
                }
            })
    }

    const signup = (event: any) => {
        event.preventDefault()

        const endpoint = 'https://cors-anywhere.herokuapp.com/206.189.91.54/api/v1/auth'
        const method = 'POST'
        const headers = { 'Content-Type': 'application/json' }
        const body = JSON.stringify({ email, password, password_confirmation: passwordConfirmation })

        fetch(endpoint, { method, headers , body })
            .then(response => {
                if(response.status == 200) {
                    const endpoint = 'https://cors-anywhere.herokuapp.com/206.189.91.54/api/v1/auth/sign_in'
                    const method = 'POST'
                    const headers = { 'Content-Type': 'application/json' }
                    const body = JSON.stringify({ email, password })
            
                    fetch(endpoint, { method, headers , body })
                    .then(response => {
                        if(response.status == 200) {
                            setSession({
                                accessToken: response.headers.get('access-token'),
                                client: response.headers.get('client'),
                                uid: response.headers.get('uid'),
                                expiry: response.headers.get('expiry')
                            })
                        } else {
                            //Put Error Message
                        }
                    })
                } else {
                    //Put Error Message
                }
            })
    }

    return (
        <>
            <div className={"container " + (isRegisterMode ? 'register-mode' : '')}>
                <div className="forms-container">
                    <div className="login-register">
                        <form id="loginForm" className="log-in-form">
                            <h2 className="title">Log in</h2>
                            <div className="input-field">
                                <i className="fas fa-envelope"></i>
                                <input type="email" name="emailLogin" id="emailLogin" placeholder="Email" onChange={event => setEmail(event.target.value)}/>
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" name="passwordLogin" id="passwordLogin" placeholder="Password" onChange={event => setPassword(event.target.value)}/>
                            </div>
                            <button type="submit" value="Login" className="btn solid" onClick={login}>Login</button>
                        </form>
                        <form id="registerForm" className="register-form">
                            <h2 className="title">Register</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" name="fullName" id="fullName" placeholder="Full Name" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-envelope"></i>
                                <input type="email" name="email" id="email" placeholder="Email" onChange={event => setEmail(event.target.value)}/>
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" name="password" id="password" placeholder="Password" onChange={event => setPassword(event.target.value)}/>
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password"onChange={event => setPasswordConfirmation(event.target.value)}/>
                            </div>
                            <button type="submit" className="btn solid" value="Register" onClick={signup}>Register</button>
                        </form>
                    </div>
                </div>

                <div className="panels-container">
                    <div className="panel left-panel">
                    <div className="content">
                        <h3>New here ?</h3>
                        <p>
                        Create an account and experience a whole new world! We just need a few details about you.
                        </p>
                        <button className={"btn transparent "+ (isRegisterMode ? 'register-mode' : '') } id="register-btn" onClick={toggleForm}>
                        Register
                        </button>
                    </div>
                    <img src={log} className="image" alt=""/>
                    </div>
                    <div className="panel right-panel">
                    <div className="content">
                        <h3>Already have an account ?</h3>
                        <p>
                        Welcome back! Head here to access your account.
                        </p>
                        <button className="btn transparent" id="log-in-btn" onClick={toggleForm}>
                        Log In
                        </button>
                    </div>
                    <img src={register} className="image" alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LogInRegister;