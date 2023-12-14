import React from 'react';
import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';
import HomeSimpleSteps from "./HomeSimpleSteps.jsx";
import AboutUs from "./AboutUs.jsx";


const Home = () => {
    return (
        <div>
            <HomeHeader />
            <HomeThreeColumns />
            <HomeSimpleSteps />
            <AboutUs />
        </div>
    );
}

export default Home;
