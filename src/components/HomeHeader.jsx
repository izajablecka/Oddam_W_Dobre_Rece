import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import '../scss/HomeHeader.scss'
import hero from "../assets/images/Hero Image.png"
import dekoracja from "../assets/images/Decoration.png"


const HomeHeader = () => {

    return (
        <header>
            <div className="container">
                <div className='login'>
                    <RouterLink to="/login">Zaloguj</RouterLink>
                    <RouterLink to="/register">Załóż konto</RouterLink>
                </div>
                <nav>
                    <a href="/">Start</a>
                    <ScrollLink to="steps" smooth={true} duration={500}>O co chodzi?</ScrollLink>
                    <ScrollLink to="about-us" smooth={true} duration={500}>O nas</ScrollLink>
                    <ScrollLink to="charity" smooth={true} duration={500}>Fundacja i organizacje</ScrollLink>
                    <ScrollLink to="contact" smooth={true} duration={500}>Kontakt</ScrollLink>
                </nav>
            </div>

            <div className="content-container">
                <div className="image-container">
                    <img className="img-box" src={hero} alt=""/>
                </div>
                <div className="text-container">
                    <h2>Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce</h2>
                    <img className='decoration' src={dekoracja} alt=""/>
                    <div className="collect-container">
                        <RouterLink className='collect' to="/login">Oddaj <br /> rzeczy</RouterLink>
                        <RouterLink className='collect' to="/login">Zorganizuj <br /> zbiórkę</RouterLink>
                    </div>
                </div>
            </div>
        </header>

    );
}

export default HomeHeader;