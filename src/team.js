import React, {
  useEffect,
  useState,
  useRef
} from "react";

//import ParticlesBg from "particles-bg";
//import icon from "./bone.png";
//import meat from "./meat.png";

{/*  let config = {
     num: [1, 2],
     rps: 0.9,
     radius: [1, 10],
     life: [5, 10],
     v: [2, 3],
     tha: [-50, 50],
     alpha: [1, 0.8],
     scale: [.5, 1],
     body: icon,
     position: "all",
     cross: "dead",
     random: 10,
     g: 0.3
   };
   let config2 = {
      num: [1, 2],
      rps: 0.9,
      radius: [1, 10],
      life: [5, 10],
      v: [2, 3],
      tha: [-50, 50],
      alpha: [1, 0.8],
      scale: [.2, .5],
      body: meat,
      position: "all",
      cross: "dead",
      random: 10,
      g: 0.3
    };<ParticlesBg className="particlesTeam" type="custom" config={config} bg={true} /><ParticlesBg className="particlesTeam" type="custom" config={config2} bg={true} />*/}



export default function Team() {
  return ( <
    div className = "TeamMemberScreen" >
    <
    div className = "TeamMemberTitle" > Team Members < /div>
    <
    div className = "TeamMemberContainer" >
    <
    div className = "TeamMemberDiv" >
    <
    div className = "TeamMemberProfile" >
    <
    a className = "linkTeam"
    href = "https://twitter.com/AtlasKingsman"
    target = "_blank" >
    <
    img className = "TeamMemberPic"
    src = "/config/images/22.png" / >
    <
    /a> <
    a className = "TeamMemberName" > Atlas Kingsman < /a> < /
    div > <
    /div> <
    div className = "TeamMemberDiv" >
    <
    div className = "TeamMemberProfile" >
    <
    a className = "linkTeam"
    href = "https://twitter.com/kekmaan"
    target = "_blank" >
    <
    img className = "TeamMemberPic"
    src = "/config/images/60.png" / >
    <
    /a> <
    a className = "TeamMemberName" > Kekmaan < /a> < /
    div > <
    /div> <
    div className = "TeamMemberDiv" >
    <
    div className = "TeamMemberProfile" >
    <
    a className = "linkTeam"
    href = "https://twitter.com/mrknfts"
    target = "_blank" >
    <
    img className = "TeamMemberPic"
    src = "/config/images/43.png" / >
    <
    /a> <
    a className = "TeamMemberName" > Kendez < /a> < /
    div > <
    /div> <
    div className = "TeamMemberDiv" >
    <
    div className = "TeamMemberProfile" >
    <
    a className = "linkTeam" >
    <
    img className = "TeamMemberPic"
    src = "/config/images/41.png" / >
    <
    /a> <
    a className = "TeamMemberName" > Kochart < /a> < /
    div > <
    /div> < /
    div >
    < /div>

  )
}
