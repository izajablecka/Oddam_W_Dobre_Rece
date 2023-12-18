import React, {useState} from 'react';
import {Link} from "react-router-dom";
import dekoracja from "../assets/images/Decoration.png"
import "../scss/Login.scss"

const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginChange = (e) => {
        setLogin(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log('Login:', login);
        console.log('Password:', password);

    };

    return (
        <div>
            <div className='login'>
                <Link to="/login">Zaloguj</Link>
                <Link to="/register">Załóż konto</Link>
            </div>
            <nav>
                <a href="/">Start</a>
                <a href="/">O co chodzi?</a>
                <a href="/">O nas</a>
                <a href="/">Fundacja i organizacje</a>
                <a href="/">Kontakt</a>
            </nav>
            <div className="log-in">
                <h2 className="log-in__hdl">Zaloguj się</h2>
                <img className="log-in__img" src={dekoracja} alt=""/>
                <form className="log-in__form" onSubmit={handleLoginSubmit}>
                    <label>
                        Email
                        <input type="text" value={login} onChange={handleLoginChange}/>
                    </label>
                    <br/>
                    <label>
                        Hasło
                        <input type="password" value={password} onChange={handlePasswordChange}/>
                    </label>
                    <br/>

                </form>
                <div className="buttons-container">
                <Link to='/register' className="register-button">Załóż konto</Link>
                <button type="submit" className="login-button">Zaloguj się</button>
            </div>
            </div>
        </div>
    );
}

export default Login;
