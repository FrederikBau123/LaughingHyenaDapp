import React, {
  useEffect,
  useState,
  useRef
} from "react";

import { isMobile } from "react-device-detect";

import bgdesktop from './bghyena.png'
import bgphone from './bg.png'

export default function Team() {
  return(
    <div className="bg" >
    <img className="bgimg"  src={isMobile ? bgphone : bgdesktop}/>
    </div>
  )
}
