import React from "react";
import Common from "./Common";

var urlImage1 = "https://png.pngtree.com/element_pic/16/11/02/bd886d7ccc6f8dd8db17e841233c9656.jpg"

const Home = () => {
    return (
        <>
          <Common 
          name="Grow Your Business With"
          text="Get Started By Making Logos"
          visit="/about"
          btname="Get Started"
          img = {urlImage1}
           />
        </>
    );
}

export default Home;