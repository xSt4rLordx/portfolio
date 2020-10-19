import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/phone.png";
import Common from "./Common";

import Contact from "./Contact";


const About = () => {
    return (
        <>
            <Common
                name="I am a "
                strong="Developer"
                imgsrc={web}


                visit="/Contact"

                btname="Contact"
                btnameo="Our Services"
             a=" Phone number : " 
                b="Email : "
                c="Address : "
                grd="+91 9304249781"
                tw="Akashdeep9226@gmail.com"
                tn="Shahi majra, phase-5, SAS Nagar"
                alt="About img"
           
            />





          
             <Contact />
            
        </>
    );
};

export default About;