import React from 'react';
import Banner from '../../Banner/Banner';
import MarqueeLogo from '../../MarqueeLogo/MarqueeLogo';
import About from '../../About/About';
import WeOffer from '../../WeOffer/WeOffer';

const Home = () => {
    return (
        <div className='mt-20'>
            <Banner></Banner>
            <MarqueeLogo></MarqueeLogo>
            <About></About>
            <WeOffer></WeOffer>
        </div>
    );
};

export default Home;