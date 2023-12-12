import React from "react";
import "../scss/HomeThreeColumns.scss"

const HomeThreeColumns = () => {
    return (
        <section>
            <section className="columns">

                <div className="column">
                    <h1 className="column__number column__number--1">10</h1>
                    <h4 className="column__hdl">ODDANYCH WORKÓW</h4>
                    <p className="column__dsc"> Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a
                        elit
                        viverra elementuma. Aliquam erat volutpat. </p>
                </div>

                <div className="column">
                    <h1 className="column__number column__number--2">5</h1>
                    <h4 className="column__hdl">WSPARTYCH ORGANIZACJI</h4>
                    <p className="column__dsc"> Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a
                        elit
                        viverra elementuma. Aliquam erat volutpat. </p>
                </div>

                <div className="column">
                    <h1 className="column__number column__number--3">7</h1>
                    <h4 className="column__hdl">ZORGANIZOWANYCH ZBIÓREK</h4>
                    <p className="column__dsc"> Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a
                        elit
                        viverra elementuma.
                        Aliquam erat volutpat. </p>
                </div>

            </section>
        </section>
    );
};

export default HomeThreeColumns;
