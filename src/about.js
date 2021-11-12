import React, { useEffect, useState, useRef } from "react";






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
    </div>
  )
}
