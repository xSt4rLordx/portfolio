import React from 'react';
import { NavLink } from 'react-router-dom';


const Common = (props) => {
    return (
        <>
            <section id="header" className=" d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>
                                        {props.name}<strong className="brand-name">{props.strong}</strong> This is my favorite work.
                                    </h1>
             <ul>
                                        <li>
                                    <h2 className="my-3">
                                                We are the leading company in web devlopment.
                                </h2>  </li>
                                 <li>
                                    <h2 className="my-3">
                                                {props.a}<strong>{props.grd}</strong>
                                </h2>  </li>
                                         <li>
                                    <h2 className="my-3">
                                                {props.b}<strong>{props.tw}</strong>                          
                                            </h2>  </li>
                                         <li>
                                    <h2 className="my-3">
                                                {props.c}<strong>{props.tn}</strong>
                                </h2>  </li>
                                    </ul>
                                        
                                    <div className="my-3">
                                        <NavLink to={props.visit} className="btn-get-started mr-3">
                                            {props.btname}
                                        </NavLink>
                                        <NavLink to="/Services" className="btn-get-started mr-3">
                                            {props.btnameo}
                                        </NavLink>


                                    </div>

                                </div>
                                <div className="col-lg-6 order-1 order-lg-1 header-img">
                                    <img src={props.imgsrc} className="img-fluid animated" alt={props.alt}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Common;