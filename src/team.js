import React, {
  useEffect,
  useState,
  useRef
} from "react";
import {isMobile} from 'react-device-detect';


export default function Team() {

const [isShown1, setIsShown1] = useState(false);
const [isShown2, setIsShown2] = useState(false);
const [isShown3, setIsShown3] = useState(false);
const [isShown4, setIsShown4] = useState(false);
const [isShown5, setIsShown5] = useState(false);

  return ( <
    div className = "TeamMemberScreen" >
    <
    div className = "title" > Team Members < /div>
    <
    div className = "TeamMemberContainer" >
    <
    div className = "TeamMemberDiv"  onMouseEnter={() => setIsShown1(true)}
        onMouseLeave={() => setIsShown1(false)} >
    <
    div className = "TeamMemberProfile" >
    <
    img className = "linkTeam"
    src = "/config/images/22.png" / >
    <
    a className = "TeamMemberName" href = "https://twitter.com/atlaskingsman"
    target = "_blank" > Atlas Kingsman < /a> < /
    div >{isShown1 && (<
    div className={isMobile ? "TeamMemberPopup2" : "TeamMemberPopup1" }>
    <div className="TeamMemberPopupTitle">Grind in silence and let the success do the noise</div>
    <div className="TeamMemberPopupDesc">The fire and spark of the clan, he is the glue that helps everything to function. This go getter has his own way of getting things done. By adding his own twist, this hard-worker loves to get his hands dirty and leads by example. Not afraid to throw some hands, this fighting spirit is backed by the fact that he will do anything for the clan. His sense of loyalty is unheard of which is what makes him that much more unique. </div>
    <div className={isMobile ? "circle5" : "circle3" }></div>
    <div className={isMobile ? "circle6" : "circle4" }></div>
    </div>)} <
    /div> <
    div className = "TeamMemberDiv" onMouseEnter={() => setIsShown2(true)}
        onMouseLeave={() => setIsShown2(false)} >
    <
    div className = "TeamMemberProfile" >
    <
    img className = "linkTeam"
    src = "/config/images/47.png" / >
    <
    a className = "TeamMemberName" href = "https://twitter.com/kekmaan"
    target = "_blank" > Kekmaan < /a> < /
    div > {isShown2 && ( <
    div className={isMobile ? "TeamMemberPopup2" : "TeamMemberPopup1" }>
    <div className="TeamMemberPopupTitle">Why wait for opportunities when I can make them myself</div>
    <div className="TeamMemberPopupDesc">Mystery comes in all shapes and forms but none can come close to this computer whiz. With expensive taste and a love for good style, out of all the clan he is the most logical. A programar at heart, you can catch this gaming warlord wrecking havoc as he claims Pc as the master race. He has the determination of a barbarian and the heart of a warrior. </div>
    <div className={isMobile ? "circle5" : "circle3" }></div>
    <div className={isMobile ? "circle6" : "circle4" }></div>
    </div> )}<
    /div>
    <
    div className = "TeamMemberDiv" onMouseEnter={() => setIsShown3(true)}
        onMouseLeave={() => setIsShown3(false)}>
    <
    div className = "TeamMemberProfile" >
    <
    img className = "linkTeam"
    src = "/config/images/43.png" / >
    <
    a className = "TeamMemberName"  href = "https://twitter.com/mrknfts"
    target = "_blank" > Kendez < /a> < /
    div >{isShown3 && (<
    div className="TeamMemberPopup2">
    <div className="TeamMemberPopupTitle">I'll sleep when I am dead and surrounded by money</div>
    <div className="TeamMemberPopupDesc">Solitude has shaped his mentality and has brewed within him a longing for being not just independent but self-sufficient. Mastermind behind the clan, his passion is unlike any other, which has helped him gain a love for having a strong sense of freedom, especially for his clan. This OG crypto wizard is goofy and outgoing and takes pride in adapting to any scenario he finds himself in, which makes him even more dangerous. </div>
    <div className="circle5"></div>
    <div className="circle6"></div>
    </div> )} <
    /div> <
    div className = "TeamMemberDiv" onMouseEnter={() => setIsShown4(true)}
        onMouseLeave={() => setIsShown4(false)} >
    <
    div className = "TeamMemberProfile" >
    <
    img className = "linkTeam"
    src = "/config/images/41.png" / >
    <
    a className = "TeamMemberName" > Kochart < /a> < /
    div > {isShown4 && (<
    div className={isMobile ? "TeamMemberPopup2" : "TeamMemberPopup3" }>
    <div className="TeamMemberPopupTitle">A picture is worth a thousands words, yet my critiques stay silent</div>
    <div className="TeamMemberPopupDesc">He lets his art do the talking, all the while grinding night and day. He has a hunger for his work and he is never satisfied. Perfection is the goal and he will settle for nothing less. He holds himself to a high standard that helps to inspire others. He is dedicated to his craft and will not take no for an answer.</div>
    <div className={isMobile ? "circle5" : "circle1" }></div>
    <div className={isMobile ? "circle6" : "circle2" }></div>
    </div> )} <
    /div><
    div className = "TeamMemberDiv" onMouseEnter={() => setIsShown5(true)}
        onMouseLeave={() => setIsShown5(false)} >
    <
    div className = "TeamMemberProfile" >
    <
    img className = "linkTeam"
    src = "/config/images/2.png" / >
    <
    a className = "TeamMemberName" > Kount < /a> < /
    div > {isShown5 && (<
    div className={isMobile ? "TeamMemberPopup2" : "TeamMemberPopup3" }>
    <div className="TeamMemberPopupTitle">You miss 100% of every shot you don't take (Wayne Gretski) -Michael Scott</div>
    <div className="TeamMemberPopupDesc">Always sees the glass half full and is never down and out. He always looks for the laugh in everything. When in doubt, smile it out and one will see the world for what it really is. This life is all one big joke and everyone is waiting for the punchline. He is witty and charming and not afraid of shooting his shot with no fear of rejection. It is what it is so laugh while you can before it is too late.  </div>
    <div className={isMobile ? "circle5" : "circle1" }></div>
    <div className={isMobile ? "circle6" : "circle2" }></div>
    </div> )} <
    /div> < /
    div >
    </div>

  )
}
