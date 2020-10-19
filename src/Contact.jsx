import React, { useState } from 'react';
import fb from "../src/images/fb.png";
import insta from "../src/images/in.png";
import lin from "../src/images/lk.png";
import wts from "../src/images/wts.png";


const Contact = () => {
    
    return (
        <>

            <div className='my-5'>
                <h1 className="text-center">Contact Us</h1>
                <div className="container container_div">
                    <div className="row">
                        <div className="col-md-6 col-10 mx-auto">
                            <form >
                                <div className="mb-3">
                                    <label className="form-label">Fullname</label>
                                    <input type="text" className="form-control" id="first-name" name='fullname' placeholder="Enter your name" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Phone Number</label>
                                    <input type="number" className="form-control" id="phone" name='phone'  placeholder="Enter phone number" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" name='email'  placeholder="enter@email.com" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Message</label>
                                    <textarea type="text" className="form-control" id="first-name" name='message' placeholder="Enter your message" >
                                    </textarea>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-outline-primary">Submit form</button>
                                </div>


                            </form>
                        </div>
                    </div>
                </div>
            </div>
             <div className='my-5'>
                <h1 className="text-center">Social</h1>
                <div className="container container_div">
                    <div className="row">
                        <div className="col-md-6 col-10 mx-auto">
                            <a  href="https://www.facebook.com/profile.php?id=100005780824109" activeClassName='menu_active' >
                           <img src={fb} className="social" alt="facebook" />
                           </a>
                             <a href="https://instagram.com/_sky_blue_x?igshid=921epqim9kum" activeClassName='menu_active' >
                             <img src={insta} className="social" alt="instagram" />
                            </a>
                              <a  href="https://www.linkedin.com/in/akash-pandey-394b39188" activeClassName='menu_active' >
                             <img src={lin} className="social" alt="linkdin" />
                            </a>
                              <a activeClassName='menu_active' href="/About">
                             <img src={wts} className="social" alt="whatsapp" />
                           </a>
                        </div></div></div></div>
        </>
    );
};

export default Contact;