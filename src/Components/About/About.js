import React from "react";
import "./About.css";

const About = (props) => {

    const containerStyle = {
        width: '800px',
        height: '600px'
      }
  return (
    <div className="about-body" id='about'>
      <div className="about-body-container">
        <div className="business-hour-container">
          <h1>Tokyo, Japan</h1>
          <h2>OPENING HOURS</h2>
          <div className="mon-thur">
            <h3 className="date">MON - THU</h3>
            <h4 className='time'>11AM - 10PM</h4>
          </div>
          <div className="friday">
            <h3 className="date">FRI</h3>
            <h4 className='time'>11AM - 11PM</h4>
          </div>
          <div className="saturday">
            <h3 className="date">SAT</h3>
            <h4 className='time'>10AM - 11PM</h4>
          </div>
          <div className="sunday">
            <h3 className="date">SUN</h3>
            <h4 className='time'>10AM - 9PM</h4>
          </div>
        </div>
        <div className="about-image-one"></div>
      </div>
    </div>
  );
};

export default About
