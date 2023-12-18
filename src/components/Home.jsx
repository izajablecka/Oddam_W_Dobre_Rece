import React from 'react';
import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';
import HomeSimpleSteps from "./HomeSimpleSteps.jsx";
import AboutUs from "./AboutUs.jsx";
import WhoWeHelp from './WhoWeHelp.jsx'
import Contact from "./Contact.jsx";

const Home = () => {
    return (
        <div>
            <HomeHeader />
            <HomeThreeColumns />
            <HomeSimpleSteps />
            <AboutUs />
            <WhoWeHelp />
            <Contact />
        </div>
    );
}

export default Home;
