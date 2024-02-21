import React from "react";
import Home from "./Component/Home";
import About from "./Component/About";
import Services from "./Component/Services";
import Contact from "./Component/Contact";
import Navbar from "./Component/Navbar";
import { Routes, Route} from "react-router-dom"
import Footer from "./Component/Footer";

function App() {
  return (
   <>
   <Navbar />
   <Routes>
    <Route exact path="/" Component={Home} />
    <Route exact path="/Services" Component={Services} />
    <Route exact path="/About" Component={About} />
    <Route exact path="/Contact" Component={Contact} /> 
   </Routes>
   <Footer />
   </>
  );
}

export default App;
