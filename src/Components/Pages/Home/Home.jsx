import React from 'react';
import Banner from '../../Banner/Banner';
import MarqueeLogo from '../../MarqueeLogo/MarqueeLogo';
import About from '../../About/About';
import WeOffer from '../../WeOffer/WeOffer';
import IntergrationSection from '../../IntegrationSection/IntergrationSection';
import Geographies from '../../Geographies/Geographies';

const Home = () => {
    return (
        <div className='mt-20 scroll-smooth'>
            <div id="banner"><Banner /></div>
            <MarqueeLogo />
            <div id="about"><About /></div>
            <div id="features"><WeOffer /></div>
            <div id="integration"><IntergrationSection /></div>
            <div id="geographies"><Geographies /></div>
        </div>
    );
};

export default Home;
