import React from "react";
import {Link} from "react-router-dom";
import decoration from '../assets/images/Decoration.png'
import Tshirt from '../assets/images/Icon-1.png'
import Bag from '../assets/images/Icon-2.png'
import Search from '../assets/images/Icon-3.png'
import Reload from '../assets/images/Icon-4.png'


const HomeSimpleSteps = () => {

    return (
        <section className="steps">
            <div className="title">
                <h1 className="title__hdl">Wystarczą 4 proste kroki</h1>
                <img className="title__img" src={decoration} alt="dekoracja"/>
            </div>

            <div className="col">
                <img className="col__img col__img--1" src={Tshirt} alt="Tshirt"/>
                <h4 className="col__hdl">Wybierz rzeczy</h4>
                <p className="col__dsc">ubrania, zabawki, sprzęt i inne</p>
            </div>

            <div className="col">
                <img className="col__img col__img--2" src={Bag} alt="Tshirt"/>
                <h4 className="col__hdl">Wybierz rzeczy</h4>
                <p className="col__dsc">ubrania, zabawki, sprzęt i inne</p>
            </div>


            <div className="col">
                <img className="col__img col__img--3" src={Search} alt="Tshirt"/>
                <h4 className="col__hdl">Wybierz rzeczy</h4>
                <p className="col__dsc">ubrania, zabawki, sprzęt i inne</p>
            </div>

            <div className="col">
                <img className="col__img col__img--4" src={Reload} alt="Tshirt"/>
                <h4 className="col__hdl">Wybierz rzeczy</h4>
                <p className="col__dsc">ubrania, zabawki, sprzęt i inne</p>
            </div>
            <div className="btn">
                <Link to="/Login" className="btn__steps">ODDAJ RZECZY</Link>
            </div>


        </section>
    )
}


export default HomeSimpleSteps;

