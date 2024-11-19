import React, { useState, useEffect, useContext } from 'react';
import Header from '../../Layouts/header/Header';
import HeroSection from '../../Layouts/sections/HeroSection';
import SectionL from '../../Layouts/sections/SectionL';
import SectionR from '../../Layouts/sections/SectionR';

const Home = () => {
    useEffect(() => {
    }, []);

    return (
        <>
            <Header/>
            <HeroSection/>
            <SectionL/>
            <SectionR />
        </>
    );
};

export default Home;