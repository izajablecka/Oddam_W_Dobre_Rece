import React, {useState} from "react";
import '../scss/WhoWeHelp.scss'
import decoration from "../assets/images/Decoration.png"

const WhoWeHelp = () => {
    const [activePage, setActivePage] = useState("fundacje");

    const handlePageChange = (page) => {
        setActivePage(page);
    };

    const renderContent = () => {
        switch (activePage) {
            case "fundacje":
                return (
                    <div className="charity">
                        <p className="charity__txt-hdl">
                            W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz
                            sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                        </p>
                        <div className="charity__unit">
                            <div className="charity__unit-1">
                                <h4 className="charity__unit-1__hdl">Fundacja "Dbam o Zdrowie"</h4>
                                <p className="charity__unit-1__txt">Cel i misja: Pomoc osobom znajdującym się w trudnej
                                    sytuacji życiowej.</p>
                                <p className="charity__unit-1__txt-right">ubrania, jedzenie, sprzęt AGD, meble,
                                    zabawki</p>
                            </div>
                            <div className="charity__unit-2">
                                <h4 className="charity__unit-2__hdl">Fundacja "Dla dzieci"</h4>
                                <p className="charity__unit-2__txt">Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                                <p className="charity__unit-2__txt-right">ubrania, meble, zabawki</p>
                            </div>
                            <div className="charity_unit-3">
                                <h4 className="charity__unit-3__hdl">Fundacja "Bez domu"</h4>
                                <p className="charity__unit-3__txt">Cel i misja: Pomoc dla osób nie posiadających
                                    miejsca zamieszkania.</p>
                                <p className="charity__unit-3__txt-right">ubrania, jedzenie, ciepłe koce</p>
                            </div>
                        </div>
                        <div className="numbers">
                            <div className="numbers__page-1">1</div>
                            <div className="numbers__page-2">2</div>
                            <div className="numbers__page-3">3</div>
                        </div>
                    </div>
                );
            case "organizacje":
                return (
                    <div className="NGO">
                        <p className="NGO__txt-hdl">
                            Treść dla organizacji pozarządowych. Consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation.
                        </p>
                        <div className="NGO__unit">
                            <div className="NGO__unit-1">
                                <h4 className="NGO__unit-1__hdl">Organizacja “Lorem Ipsum 1”</h4>
                                <p className="NGO__unit-1__txt">Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                                <p className="NGO__unit-1__txt-right">Egestas, sed, tempus</p>
                            </div>
                            <div className="NGO__unit-2">
                                <h4 className="NGO__unit-2__hdl">Organizacja “Lorem Ipsum 2”</h4>
                                <p className="NGO__unit-2__txt">Hendrerit gravida rutrum quisque non tellus orci ac
                                    auctor augue.</p>
                                <p className="NGO__unit-2__txt-right">Ut, aliquam, purus, sit, amet</p>
                            </div>
                            <div className="NGO_unit-3">
                                <h4 className="NGO__unit-3__hdl">Organizacja “Lorem Ipsum 3”</h4>
                                <p className="NGO__unit-3__txt">Scelerisque in dictum non consectetur a erat nam.</p>
                                <p className="NGO__unit-3__txt-right">Mi, quis, hendrerit, dolor</p>
                            </div>
                        </div>
                        <div className="numbers">
                            <div className="numbers__page-1">1</div>
                            <div className="numbers__page-2">2</div>
                        </div>
                    </div>

                );
            case "lokalneZbiorki":
                return (
                    <div className="local">
                        <p className="local__txt-hdl">
                            Treść dla Lokalnych zbiórek. Sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua.Ut enim ad minim veniam, quis nostrud exercitation.
                        </p>
                        <div className="local__unit">
                            <div className="local__unit-1">
                                <h4 className="local__unit-1__hdl">Zbiórka “Lorem Ipsum 1”</h4>
                                <p className="local__unit-1__txt">Quis varius quam quisque id diam vel quam elementum
                                    pulvinar.</p>
                                <p className="local__unit-1__txt-right">Egestas, sed, tempus</p>
                            </div>
                            <div className="local__unit-2">
                                <h4 className="local__unit-2__hdl">Zbiórka “Lorem Ipsum 2”</h4>
                                <p className="local__unit-2__txt">Hendrerit gravida rutrum quisque non tellus orci ac
                                    auctor augue.</p>
                                <p className="local__unit-2__txt-right">Ut, aliquam, purus, sit, amet</p>
                            </div>
                            <div className="local_unit-3">
                                <h4 className="local__unit-3__hdl">Zbiórka “Lorem Ipsum 3”</h4>
                                <p className="local__unit-3__txt">Scelerisque in dictum non consectetur a erat nam.</p>
                                <p className="local__unit-3__txt-right">Mi, quis, hendrerit, dolor</p>
                            </div>
                        </div>
                    </div>

                );
            default:
                return null;
        }
    };

    return (
        <section>
            <div className='who-we-help'>
                <h1 className='who-we-help__hdl'>Komu pomagamy?</h1>
                <img className='who-we-help_img' src={decoration} alt=""/>
                <div className="pages">
                    <a
                        className={`pages_help ${activePage === "fundacje" ? "active" : ""}`}
                        onClick={() => handlePageChange("fundacje")}
                    >
                        Fundacjom
                    </a>
                    <a
                        className={`pages_help ${activePage === "organizacje" ? "active" : ""}`}
                        onClick={() => handlePageChange("organizacje")}
                    >
                        Organizacjom pozarządowym
                    </a>
                    <a
                        className={`pages_help ${activePage === "lokalneZbiorki" ? "active" : ""}`}
                        onClick={() => handlePageChange("lokalneZbiorki")}
                    >
                        Lokalnym zbiórkom
                    </a>
                </div>
            </div>
            <div>
                {renderContent()}
            </div>
        </section>
    );
};

export default WhoWeHelp;
