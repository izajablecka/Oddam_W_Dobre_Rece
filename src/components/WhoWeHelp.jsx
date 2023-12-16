import React from "react";
import '../scss/WhoWeHelp.scss'
import decoration from "../assets/images/Decoration.png"

const WhoWeHelp = () => {

    return (
        <>
            <section>
                <div className='who-we-help'>
                    <h1 className='who-we-help__hdl'>Komu pomagamy</h1>
                    <img className='who-we-help_img' src={decoration} alt=""/>
                    <div className="">
                        <a href="/">Fundacjom</a>
                        <a href="/">Organizacjom pozarządowym</a>
                        <a href="/">Lokalnym zbiórkom</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhoWeHelp;