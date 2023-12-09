import React from 'react';
import { Route } from 'react-router-dom';
import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';


const Home = () => {
    return (
        <div>
            <Route path="/" exact component={HomeHeader} />
            <Route path="/" exact component={HomeThreeColumns} />
        </div>
    );
}

export default Home;
