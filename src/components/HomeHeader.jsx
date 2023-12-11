import React from 'react';
import {Link} from 'react-router-dom';
import '../scss/HomeHeader.scss'

const HomeHeader = () => {
    return (
        <header>
            <div className="container">
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
            </div>

            <div className="content-container">
                <div className="image-container">
                    <img className="img-box" src="src/assets/images/Hero Image.png" alt="" />
                </div>

                <div className="text-container">
                    <h1>Zacznij pomagać! <br /> Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <img className='decoration' src="src/assets/images/Decoration.png" alt="" />
                    <div>
                        <a href="/">Oddaj rzeczy</a>
                        <a href="/">Zorganizuj zbiórkę</a>
                    </div>
                </div>
            </div>
        </header>

    );
}

export default HomeHeader;