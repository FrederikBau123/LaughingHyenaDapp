import React, { useEffect, useState, useRef } from "react";


export default function LinkHeader({homePageState, mintState, aboutState, loreState, roadMapState, handleHomePage, handleMint, handleAbout, handleLore, handleRoadMap}){
  return(
    <div className="LinkHeader">
    <div className="ElementDivHeaderLogo">
      <img className ="headerLogo" src={"/config/images/logo.png"}/>
    </div>
    <div className="ElementDivHeaderLinks">
      <button className={`LinkButton ${homePageState ? "LinkButtonActive" : ""}`} onClick={handleHomePage}>Home</button>
      <button className={`LinkButton ${mintState ? "LinkButtonActive" : ""}`} onClick={handleMint}>Mint</button>
      <button className={`LinkButton ${aboutState ? "LinkButtonActive" : ""}`} onClick={handleAbout}>About</button>
      <button className={`LinkButton ${loreState ? "LinkButtonActive" : ""}`} onClick={handleLore}>Team</button>
      <button className={`LinkButton ${roadMapState ? "LinkButtonActive" : ""}`} onClick={handleRoadMap}>Roadmap</button>
    </div >
    <div className="ElementDivHeaderSocials">
      <a href="https://twitter.com/LaughingHyenasC" target="_blank"><img className="headerSocialsTwitter" src={"/config/images/twitter.png"}/></a>
      <a href="default.asp" target="_blank"><img className="headerSocialsDiscord" src={"/config/images/discord.png"}/></a>
    </div>
    </div>
  )
}
