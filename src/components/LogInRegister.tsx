import React, { useState, useContext, useEffect } from "react";
import SessionContext from "../contexts/SessionContext";
import log from '../log.svg'
import slack from '../slack-logo.png'

const LogInRegister = () => {

    // const
    const [isRegisterMode, setIsRegisterMode] = useState(false);
    const toggleForm = () => {
        setIsRegisterMode(!isRegisterMode);
        setErrors('')
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState('')
    const [busy, setBusy] = useState(false)
    const [isEmailValid, setEmailValid] = useState(true)

    const { session, setSession } = useContext(SessionContext)

    const login = (event: any) => {
        event.preventDefault()

        const endpoint = `${process.env.REACT_APP_SLACK_API_URL}/api/v1/auth/sign_in`
        const method = 'POST'
        const headers = { 'Content-Type': 'application/json' }
        const body = JSON.stringify({ email, password })

        setBusy(true)
        
        fetch(endpoint, { method, headers , body })
            .then(response => {
                setBusy(false)
                console.log(response.headers.get('data'))
                if(response.status == 200) {
                    setSession({
                        accessToken: response.headers.get('access-token'),
                        client: response.headers.get('client'),
                        uid: response.headers.get('uid'),
                        expiry: response.headers.get('expiry')
                    })
                } else {         
                    response.json()
                        .then(data => {
                            setErrors(data.errors.join('. '))
                        })           
                    
                }
            })
            .catch(error => {
                setBusy(false)
            })
    }

    

    const signup = (event: any) => {
        event.preventDefault()

        const endpoint = `${process.env.REACT_APP_SLACK_API_URL}/api/v1/auth`
        const method = 'POST'
        const headers = { 'Content-Type': 'application/json' }
        const body = JSON.stringify({ email, password, password_confirmation: passwordConfirmation })

        fetch(endpoint, { method, headers , body })
            .then(response => {
                if(response.status == 200) {
                    const endpoint = `${process.env.REACT_APP_SLACK_API_URL}/api/v1/auth/sign_in`
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
                            }
                        })
                } else {
                    response.json()
                        .then(data => {
                            setErrors(data.errors.full_messages.join('. '))
                        })
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
                            {errors ? <p className="text-rose-500">{errors}</p> : null}
                            <button disabled={busy} type="submit" value="Login" className="btn solid" onClick={login}>Login</button>
                        </form>
                        <form id="registerForm" className="register-form">
                            <h2 className="title">Register</h2>
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
                            {errors ? <p className="text-rose-500">{errors}</p> : null}
                            <button type="submit" className="btn solid" value="Register" onClick={signup}>Register</button>
                        </form>
                    </div>
                </div>

                <div className="panels-container">
                    <div className="panel left-panel">
                    <div className="content">
                        <h3>Great teamwork starts with a <span id="catchPhrase">digital HQ.</span></h3>
                        <p>
                        With all your people, tools and communication in one place, you can work faster and more flexibly than ever before.
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
                    <img src={slack} className="image" alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LogInRegister;