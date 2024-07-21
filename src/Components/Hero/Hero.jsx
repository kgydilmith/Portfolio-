import React from 'react'
import "./Hero.css"
import profile_img from "../../assets/IMG_6675.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
   <div id='home' className="hero">
    <img src={profile_img} alt="" />
    <h1><span>I'm yesitha Dilmith,</span> frontend devoloper based on sri lanka</h1>
    <p> I am frontdevoloper who is learning new things working hard</p>
    <div className="hero-action">
        <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
    </div>
   </div>
  )
}

export default Hero