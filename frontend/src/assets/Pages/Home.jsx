import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Summary from '../components/Summary';
import AboutMe from '../components/AboutMe';
// import '../Styles/Home.css';


const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Summary />
            <AboutMe />
        </>
    )
}

export default Home;