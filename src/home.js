import React, {
  useEffect,
  useState,
  useRef
} from "react";

import { isMobile } from "react-device-detect";

import bgdesktop from './bghyena.png'
import bgphone from './bg.png'
import hyena from './newhyena.png'

var hyenaclass = 'hyena nohyena'
var hyenaclasstalkbox = 'nohyena'

export default function Team() {

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);


if(scrollPosition == 100){
 hyenaclass='hyenaup'
 hyenaclasstalkbox = 'talkboxadd'
}
if(scrollPosition == 0 && hyenaclass!= 'hyena nohyena'){
hyenaclass = 'hyenaback'
hyenaclasstalkbox = 'talkboxremove'
}
  return(
    <div className="bg"  >
      <img className="bgimg"  src={bgphone}/>
      <img className={'hyena '+ hyenaclass}  src={hyena}/>
      <div className={"hyenatalkboxmain " + hyenaclasstalkbox}>
        <span className="hyenatalkbox">Welcome To The Savannahs </span>
        <span className="hyenatalkboxpoint"> </span>
      </div>
    </div>
  )
}
