import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/HomeHeader.scss'

const HomeHeader = () => {
    return (
        <>
        <div className='loggin'>
            <a className='' href={"/"}> Zaloguj</a>
            <a href={"/"}> Załóż konto</a>
        </div>
    <nav>
        <a href="/">Start</a>
        <a href="/">O co chodzi?</a>
        <a href="/">O nas</a>
        <a href="/">Fundacja i organizacje</a>
        <a href="/">Kontakt</a>
    </nav>
            <img src="src/assets/images/Hero Image.png" alt="" align='left'/>
            <div>
            <h1>Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</h1>
            <img src="src/assets/images/Decoration.png" alt=""/>
            </div>
            <div>
                <a href="/">Oddaj rzeczy</a>
                <a href="/">Zorganizuj zbiórkę</a>
            </div>
            
            </>
    );
}

export default HomeHeader;