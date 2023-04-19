import React from 'react';
import Banar from '../baner/Banar';
import About from './about/About';
import Products from './popularProducts/Products';
import Services from './services/Services';
import Teames from './teams/Teames';

const Home = () => {
    return (
        <div>
            <Banar></Banar>
            <About></About>
            <Services></Services>
            <Products></Products>
            <Teames></Teames>
        </div>
    );
};

export default Home;