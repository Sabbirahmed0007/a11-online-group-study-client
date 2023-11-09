import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Features from '../../Components/Features/Features';
import Faqs from '../../Components/Faq/Faqs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <Faqs></Faqs>
        </div>
    );
};

export default Home;