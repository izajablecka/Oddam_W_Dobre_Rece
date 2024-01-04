import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import dekoracja from '../assets/images/Decoration.png';
import '../scss/Register.scss';

const Register = () => {
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

    const handleRegisterSubmit = (e) => {
        e.preventDefault();

        if (password === passwordConfirmation) {

            console.log('Register - Email:', login);
            console.log('Register - Password:', password);
            console.log('Register - Password Confirmation:', passwordConfirmation);



        } else {

            console.error('Password and password confirmation do not match.');
        }
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

            <div className="account-register">
                <h2 className="account-register__hdl">Załóż konto</h2>
                <img className="account-register__img" src={dekoracja} alt=""/>
                <form className="account-register__form" onSubmit={handleRegisterSubmit}>
                    <label className="email">
                        Email
                        <input type="text" value={login} onChange={handleLoginChange}/>
                    </label>
                    <br/>
                    <label className="password">
                        Hasło
                        <input type="password" value={password} onChange={handlePasswordChange}/>
                    </label>
                    <br/>
                    <label className="password-repeat">
                        Powtórz hasło
                        <input
                            type="password"
                            value={passwordConfirmation}
                            onChange={handlePasswordConfirmationChange}
                        />
                    </label>
                    <br/>
                    <div className="buttons-register">
                        <Link to="/login" className="link-button">
                            Zaloguj się
                        </Link>
                        <button type="submit" className="submit-button">
                            Załóż konto
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
