import React from "react";
import { useState } from "react";

const LogInRegister = () => {
    const [isLogin, setIsLogin] = useState(true);
    const toggleForm = () => {
        setIsLogin(!isLogin);
    }

    return (
        <>
            <div className={"container " + (isLogin ? '' : 'register-mode')}>
                <div className="forms-container">
                    <div className="login-register">
                    <form id="loginForm" className="log-in-form">
                        <h2 className="title">Log in</h2>
                        <div className="input-field">
                        <i className="fas fa-envelope"></i>
                        <input type="email" name="emailLogin" id="emailLogin" placeholder="Email"/>
                        </div>
                        <div className="input-field">
                        <i className="fas fa-lock"></i>
                        <input type="password" name="passwordLogin" id="passwordLogin" placeholder="Password"/>
                        </div>
                        <input type="submit" value="Login" className="btn solid"/>
                    </form>
                    <form id="registerForm" className="register-form">
                        <h2 className="title">Register</h2>
                        <div className="input-field">
                        <i className="fas fa-user"></i>
                        <input type="text" name="firstName" id="firstName" placeholder="First Name"/>
                        </div><div className="input-field">
                        <i className="fas fa-user"></i>
                        <input type="text" name="lastName" id="lastName" placeholder="Last Name"/>
                        </div>
                        <div className="input-field">
                        <i className="fas fa-envelope"></i>
                        <input type="email" name="email" id="email" placeholder="Email"/>
                        </div>
                        <div className="input-field">
                        <i className="fas fa-lock"></i>
                        <input type="password" name="password" id="password" placeholder="Password"/>
                        </div>
                        <div className="input-field">
                        <i className="fas fa-mobile"></i>
                        <input type="text" name="mobileNo" id="mobileNo" placeholder="Mobile Number"/>
                        </div>
                        <div className="input-field">
                        <i className="fas fa-book"></i>
                        <select required className="form-control" name="sel1" id="sel1">
                        </select>
                        </div>
                        <input type="submit" className="btn solid" value="Register"/>
                    </form>
                    </div>
                </div>

                <div className="panels-container">
                    <div className="panel left-panel">
                    <div className="content">
                        <h3>New here ?</h3>
                        <p>
                        Create an account and experience a whole new world! We just need a few details about you and we swear we won't use them to stalk you.
                        </p>
                        <button className={"btn transparent "+ (isLogin ? '' : 'register-mode') } id="register-btn" onClick={toggleForm}>
                        Register
                        </button>
                    </div>
                    <img src="img/log.svg" className="image" alt=""/>
                    </div>
                    <div className="panel right-panel">
                    <div className="content">
                        <h3>Already have an account ?</h3>
                        <p>
                        Well, well, well. Look who's back. Head here to access your account.
                        </p>
                        <button className="btn transparent" id="log-in-btn" onClick={toggleForm}>
                        Log In
                        </button>
                    </div>
                    <img src="img/register.svg" className="image" alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LogInRegister;