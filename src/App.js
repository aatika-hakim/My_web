import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Contact from "./Contact";
import About from "./About";
import Service from "./Service";
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {Route, Routes} from 'react-router-dom';



const App = () => {
    return(
        <>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />}> Home</Route>
            <Route exact path="/contact" element={<Contact />}> Contact</Route>
            <Route exact path="/about" element={<About />}> About</Route>
            <Route exact path="/service" element={<Service />}> Service</Route>
        </Routes>
        <Footer />
        </>
    );
}

export default App;