import React from "react";
import '../scss/Contact.scss'
import dekoracja from "../../public/images/Decoration.png";
import facebook from "../../public/images/Facebook.png"
import instagram from "../../public/images/Instagram.png"

const Contact = () => {

    return (
        <>
        <div className="contact contact-background">

            <div className="contact__main">
                <div className="contact__hdl">Skontaktuj się z nami</div>
                <img className="contact__decoration" src={dekoracja} alt=""/>
                <form className="contact__form">
                    <label className="name">
                        Wpisz swoje imię
                        <input type="text" name="name" placeholder="Krzysztof"/>
                    </label>
                    <label className="email">
                        Wpisz swój email
                        <input type="email" name="email" placeholder="abc@xyz.pl"/>
                    </label>
                    <label className="message">
                        Wpisz swoją wiadomość
                        <textarea name="message" rows="5" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
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
        </>

    )
}

export default Contact;