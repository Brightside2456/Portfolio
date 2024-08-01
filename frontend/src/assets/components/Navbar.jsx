import React from "react";
import { useState } from "react";
import '../Styles/Home.css';
import ListSVG from "../Icons/list.svg";
import CloseSVG from "../Icons/close.svg";
import ReactDOM from 'react-dom/client';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'
// import CertSVG from "../Icons/cert.svg";
// import ContactSVG from "../Icons/contact.svg";
// import EducationSVG from "../Icons/education.svg";
// import HomeSVG from "../Icons/home.svg";
// import ProjectsSVG from "../Icons/project.svg"; 
// import AboutSVG from "../Icons/about.svg";





const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isClose, setIsClose] = useState(false);

    const toggleNav = () => {
        setIsOpen( (isOpen) => !isOpen);
    }
    // const toggleBtn = () =>{
    //     setIsClose( (isClose) => !isClose);
    // }

    return (
        <>
            <div className="nav-outer-container">
                <div className= "b-btn-container"  onClick={toggleNav}>
                    <img src = {ListSVG} alt="" className="open"/>
                    <img src = {CloseSVG} alt=""  className="close"/>
                </div>
                <ul className= {`navbar-container ${isOpen ? "is-open": ""}`} >
                    {/* <li><img src={AboutSVG} alt="" srcset="" /></li>
                    <li><img src={ProjectsSVG} alt="" srcset="" /></li>
                    <li><img src={ProjectsSVG} alt="" srcset="" /></li>
                    <li><img src={EducationSVG} alt="" srcset="" /></li>
                    <li><img src={CertSVG} alt="" srcset="" /></li>
                    <li><img src={ContactSVG} alt="" srcset="" /></li> */}
                    <li>About Me</li>
                    <li>Projects</li>
                    <li>Experience</li>
                    <li>Education</li>
                    <li>Certification and Awards</li>
                    <li>Contact</li>
                </ul>
            </div>
        </>
    )
};

export default Navbar;