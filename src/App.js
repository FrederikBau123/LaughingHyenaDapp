import React, { useEffect, useState, useRef } from "react";
import Home from './home.js'
import Mint from './mint.js'
import About from './about.js'
import Team from './team.js'
import RoadMap from './roadmap.js'
import LinkHeader from './linkHeader.js'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function App() {
  const [homePageState, sethomePageState] = useState(false);
  const [mintState, setMintState] = useState(false);
  const [aboutState, setAboutState] = useState(true);
  const [loreState, setLoreState] = useState(false);
  const [roadMapState, setRoadMapState] = useState(false);
  const [dropdownState, setDropdownState] = useState(false);

  function toggleDropdown(){
    setDropdownState(!dropdownState)
  }

  const SmoothScroll = () => (
    <div className="screen">
    <div className="LinkHeader">
        <div className="ElementDivHeaderLogo">
          <img className ="headerLogo" src={"/config/images/logo.png"}/>
        </div>
        <div className="lol">
          <img src="/config/images/menu.png" className="burger-nav" onClick={toggleDropdown}></img>
        </div>
        <nav className={`ElementDivHeaderLinks ${dropdownState ? "open" : ""}`}>
          <AnchorLink className="LinkButton" href='#things'>Home</AnchorLink>
          <AnchorLink className="LinkButton"  href='#mint'>Mint</AnchorLink>
          <AnchorLink className="LinkButton" href='#about'>About</AnchorLink>
          <AnchorLink className="LinkButton" href='#roadmap'>Roadmap</AnchorLink>
          <AnchorLink className="LinkButton" href='#team'>Team</AnchorLink>
        </nav >
        <div className="ElementDivHeaderSocials">
          <a href="https://twitter.com/LaughingHyenasC" target="_blank"><img className="headerSocialsTwitter" src={"/config/images/twitter.png"}/></a>
          <a href="default.asp" target="_blank"><img className="headerSocialsDiscord" src={"/config/images/discord.png"}/></a>
        </div>
    </div>
    <section id='home'>
      <Home     />
    </section>
    <section id='mint'>
      <Mint     />
    </section>
    <section id='about'>
      <About     />
    </section>
    <section id='roadmap'>
      <RoadMap     />
    </section>
    <section id='team'>
      <Team     />
    </section>
    </div>
)



      return (

        <SmoothScroll />

      );
}
