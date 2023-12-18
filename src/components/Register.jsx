import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import dekoracja from "../assets/images/Decoration.png"
import "../scss/Register.scss"

const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const handleLoginChange = (e) => {
        setLogin(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handlePasswordConfirmationChange = (e) => {
        setPasswordConfirmation(e.target.value);
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        // Perform login logic with the login and password values
        console.log('Login:', login);
        console.log('Password:', password);
        // Add your authentication logic here
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        // Perform registration logic with the login, password, and password confirmation values
        console.log('Register - Email:', login);
        console.log('Register - Password:', password);
        console.log('Register - Password Confirmation:', passwordConfirmation);
        // Add your registration logic here
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

            <div className="account">
                <h2 className="account__hdl">Załóż konto</h2>
                <img className="account__img" src={dekoracja} alt=""/>
                <form className="account__form" onSubmit={handleRegisterSubmit}>
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
                    <label>
                        Powtórz hasło
                        <input type="password" value={passwordConfirmation}
                               onChange={handlePasswordConfirmationChange}/>
                    </label>
                    <br/>
                </form>
                <div className="buttons-container">
                    <Link to="/login" className="link-button">Zaloguj się</Link>
                    <button type="submit" className="submit-button">Załóż konto</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
