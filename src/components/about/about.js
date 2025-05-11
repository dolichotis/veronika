import React from "react";

import "./about.css";
import AboutWork from "./aboutWork";
import AboutUs from "./aboutUs";

function About () {
  return (
    <div className="about divBlockStyle" id="aboutID">
      <h2 className="h2style">Как мы работаем</h2>
      <AboutWork />
      <h2 className="h2style">Почему именно мы</h2>
      <AboutUs />
    </div>
  );
}

export default About;