import React from "react";
import '../scss/Contact.scss'
import dekoracja from "../assets/images/Decoration.png";
import facebook from "../assets/images/Facebook.png"
import instagram from "../assets/images/Instagram.png"

const Contact = () => {

    return (
        <div className="contact">
            <div className="contact__main">
                <div className="contact__hdl">Skontaktuj się z nami</div>
                <img className="contact__decoration" src={dekoracja} alt=""/>
                <form className="contact__form">
                    <label className="name">
                        Wpisz swoje imię
                        <input type="text" name="name"/>
                    </label>
                    <label className="email">
                        Wpisz swój email
                        <input type="email" name="email"/>
                    </label>
                    <label className="message">
                        Wpisz swoją wiadomość
                        <textarea name="message" rows="4"/>
                    </label>
                    <button type="submit">Wyślij</button>
                </form>
            </div>
            <div className="copyright">Copyright by Coders Lab</div>
            <div className="icons">
                <img className="icon" src={facebook} alt=""/>
                <img className="icon" src={instagram} alt=""/>
            </div>

        </div>

    )
}

export default Contact;