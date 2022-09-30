import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
    return (
        <>
        <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                <div className="row">
                    <div className="col-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" >
                    <h1 >
                     {props.name}
                     </h1>
                    <h2 className="my-3"> 
                    {props.text}
                    </h2>
                    <div className="mt-5" >
                        <NavLink to={props.visit} style={{textDecoration:'none'}} className=" btn-get-started" >
                       {props.btname}
                        </NavLink>
                    </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <img className="image-fluid animated" src= {props.img} alt="img"/>
                    </div>
                    
                    </div>
                    
                </div>
            </div>
        </div>

        
        </section>
        </>
    );
}

export default Common;