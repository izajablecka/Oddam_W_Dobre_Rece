import React from "react";
import '../scss/Contact.scss'
import dekoracja from "../assets/images/Decoration.png";

const Contact = () => {

    return (
            <div className="contact">
                <div className="contact__hdl">Skontaktuj się z nami</div>
                <img className="contact__decoration" src={dekoracja} alt=""/>
                <form className="contact__form">
                    <label>
                        Wpisz swoje imię
                        <input type="text" name="name"/>
                    </label>
                    <label>
                        Wpisz swój email
                        <input type="email" name="email"/>
                    </label>
                    <label>
                        Wpisz swoją wiadomość
                        <textarea name="message" rows="4"/>
                    </label>
                    <button type="submit">Wyślij</button>
                </form>

            </div>

    )
}

export default Contact;