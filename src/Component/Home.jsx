import React from "react";
import img from "../Component/Imgs/home img.webp";
import Commom from "./Commom";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <Commom
        name="Grow your business with"
        imgsrc={img}
        visit="/Services"
        btname="Get Startrd"
      />
      <About />
      <Services />
      <Contact />
    </>
  );
};

export default Home;
