import React from "react";
import { useState } from "react";

const LogInRegister = () => {
    const [login, setLogin] = useState(true);
    const onClick = () => {
        
    }

    return (
        <>
            <div className="container">
            <div className="forms-container">
                <div className="login-register">
                    <form id="loginForm" className="log-in-form">
                        <h2 className="title">Log in</h2>
                        <div className="input-field">
                            <input type="email" name="emailLogin" id="emailLogin" placeholder="Email" />
                        </div>
                        <div className="input-field">
                            <input type="password" name="passwordLogin" id="passwordLogin" placeholder="Password" />
                        </div>
                        <button type="submit" value="Login" className="btn solid">
                            <p>Log In</p>
                        </button>
                    </form>
                    <form id="registerForm" className="register-form">
                        <h2 className="title">Register</h2>
                        <div className="input-field">
                            <input type="text" name="FullName" id="FullName" placeholder="Full Name" />
                        </div>
                        <div className="input-field">
                            <input type="email" name="email" id="email" placeholder="Email" />
                        </div>
                        <div className="input-field">
                            <input type="password" name="password" id="password" placeholder="Password" />
                        </div>
                        <div className="input-field">
                            <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" />
                        </div>
                        <button type="submit" className="btn solid" value="Register">
                            <p> Register</p>
                        </button>
                    </form>
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                <div className="content">
                    <h3>New here?</h3>
                    <p>Create an account and experience a whole new world! We just need a few details about you.</p>
                    <button className="btn transparent" id="register-btn">
                        Register Here!
                    </button>
                </div>
                <img src="img/log.svg" className="image" alt="" />
                </div>
                <div className="panel right-panel">
                <div className="content">
                    <h3>Already have an account ?</h3>
                    <p>Welcome back. Head here to access your account.</p>
                    <button className="btn transparent" id="log-in-btn" onClick={onClick}>
                        Log In Here!
                    </button>
                </div>
                <img src="img/register.svg" className="image" alt="" ></img>
                </div>
            </div>
            </div>
        </>
    )
}

export default LogInRegister;