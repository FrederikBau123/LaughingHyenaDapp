import React, { useEffect, useState, useRef } from "react";

export default function Team(){

  return(
    <div className="TeamMemberScreen">
    <div className="TeamMemberTitle">Team Members</div>
    <div className="TeamMemberContainer">
      <div className="TeamMemberDiv">
        <div className="TeamMemberProfile" >
        <a className="linkTeam" href="https://twitter.com/AtlasKingsman" target="_blank">
        <img className="TeamMemberPic" src="/config/images/17.png"/ >
        </a>
          <a className="TeamMemberName">  Atlas Kingsman  </a>
        </div>
      </div>
      <div className="TeamMemberDiv">
        <div className="TeamMemberProfile" >
        <a className="linkTeam" href="https://twitter.com/kekmaan" target="_blank">
        <img className="TeamMemberPic" src="/config/images/27.png"/ >
        </a>
          <a className="TeamMemberName">  Kekmaan  </a>
        </div>
      </div>
      <div className="TeamMemberDiv">
        <div className="TeamMemberProfile" >
          <a className="linkTeam" href="https://twitter.com/mrknfts" target="_blank">
          <img className="TeamMemberPic" src="/config/images/45.png"/ >
          </a>
          <a className="TeamMemberName" >  Kendez  </a>
        </div>
      </div>
      <div className="TeamMemberDiv">
        <div className="TeamMemberProfile" >
        <a className="linkTeam">
        <img className="TeamMemberPic" src="/config/images/58.png"/ >
        </a>
          <a className="TeamMemberName">  Kochart  </a>
        </div>
      </div>
    </div>
    </div>
  )
}
14
36
27
2
