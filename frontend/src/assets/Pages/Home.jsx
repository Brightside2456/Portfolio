import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Summary from '../components/Summary';
import AboutMe from '../components/AboutMe';
import Projects from '../components/ProjectsComponent';
// import '../Styles/Home.css';


const Home = () => {
    return (
        <>
            <div className='home-container'>
                <Navbar />
                <Banner />
                <Summary />
                <AboutMe />
                <Projects />
            </div>
        </>
    )
}

export default Home;