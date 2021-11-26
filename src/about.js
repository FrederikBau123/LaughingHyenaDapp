import React, { useEffect, useState, useRef } from "react";
import { isMobile } from "react-device-detect";

import bgdesktop from './bghyena.png'
import bgphone from './bg.png'



export default function About(){
  return(
    <div className="AboutContainer">
      <div className="AboutDiv">
          <div className="AboutName"> About Laughing Hyenas</div>
          <img className="AboutPic" src="/config/images/90.png"/>
      </div>
      <div className="AboutDescription">
      A collection of 10,000 hyenas, laughing their way to freedom on the ethereum savannas. The Laughing Hyenas are randomly generated using 140+ unique attributes.
      </div>
      <img className="aboutimg"  src={isMobile ? '' : bgphone}/>
    </div>
  )
}
