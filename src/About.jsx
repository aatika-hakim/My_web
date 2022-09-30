import React from "react";
import Common from "./Common";

var urlImage1 = "https://png.pngtree.com/element_pic/16/11/02/bd886d7ccc6f8dd8db17e841233c9656.jpg";


const About = () => {
    return (
        <>
          <Common 
          name="Welcome to About Page"
          visit="/contact"
          btname="Contact Now"
          img = {urlImage1}
           />
        </>
    );
}

export default About;