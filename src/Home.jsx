import React from 'react';
import web from "../src/images/lptp.png";
import Common from "./Common";

const Home = () => {
    return (
        <>
            <Common
                name="Hi, I am  "
                strong="Akash"
                imgsrc={web}
                visit="/About"
                btname="Hire me"
                btnameo="Download CV"
                a=" Graduate from : " 
                b="12th Standard : "
                c="Matriculation : "
                grd="IGNOU"
                tw="BSEB"
                tn="PSEB"
                alt="Home img"
            />
            
        </>
    );
};

export default Home;