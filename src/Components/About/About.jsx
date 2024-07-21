import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/IMG_6676.jpg";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am undergraduate student with a passion for innovation and excellence.I am committed to continuous personal and professional growth, ensuring that I remain at the forefront of technology and industry best practices</p>
            
          </div>
          <div className="about-skills">
             <div className="about-skill">
              <p>html & css</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>React js</p>
              <hr style={{ width: "73%" }} />
            </div>
            <div className="about-skill">
              <p>Java Script</p>
              <hr style={{ width: "65%" }} />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;
