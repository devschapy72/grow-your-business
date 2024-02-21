import React from 'react'
import Commom from './Commom'
import img from "../Component/Imgs/about.svg"
const About = () => {
  return (
    <>
         <Commom 
          name="Welcome to About page"
          imgsrc={img}
          visit="/Contact"
          btname="Contact Now"
         />
    </>
  )
}

export default About
