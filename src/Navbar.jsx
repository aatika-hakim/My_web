import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
      <>
      <div className="container-fluid nav_bg ">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
              <div className="container-fluid">
                <NavLink className="navbar-brand " to="/">My Web</NavLink>
                <button 
                  className="navbar-toggler" 
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false" 
                  aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                </button> 

                <div className="collapse navbar-collapse  flex-grow-0 " id="navbarSupportedContent">
               <ul className="navbar-nav text-right">
               <li className="nav-item text-decoration-none" >
                     <NavLink activeClassName='active' style={{ textDecoration: 'none' }} aria-current="page" to="/">Home</NavLink>
                  </li>
                  <li className="nav-item text-decoration-none">
                     <NavLink activeClassName='active' style={{ textDecoration: 'none' }}to="/contact">Contact</NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink activeClassName='active' style={{ textDecoration: 'none' }} to="/about">About</NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink activeClassName='active' style={{ textDecoration: 'none' }} to="service">Service</NavLink>
                  </li>
               </ul>
            </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </>
  );
}

export default Navbar;