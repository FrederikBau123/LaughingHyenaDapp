import React, { useEffect, useState, useRef } from "react";
//import Home from './home.js'
import Mint from './mint.js'
import About from './about.js'
import Team from './team.js'
import RoadMap from './roadmap.js'
import LinkHeader from './linkHeader.js'

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
  function handleHomePage(){
    setMintState(false)
    sethomePageState(true)
    setAboutState(false)
    setLoreState(false)
    setRoadMapState(false)
    setDropdownState(!dropdownState)
  }
  function handleMint(){
    setMintState(true)
    sethomePageState(false)
    setAboutState(false)
    setLoreState(false)
    setRoadMapState(false)
    setDropdownState(!dropdownState)
  }
  function handleAbout(){
    setMintState(false)
    sethomePageState(false)
    setAboutState(true)
    setLoreState(false)
    setRoadMapState(false)
    setDropdownState(!dropdownState)
  }
  function handleLore(){
    setMintState(false)
    sethomePageState(false)
    setAboutState(false)
    setLoreState(true)
    setRoadMapState(false)
    setDropdownState(!dropdownState)
  }
  function handleRoadMap(){
    setMintState(false)
    sethomePageState(false)
    setAboutState(false)
    setLoreState(false)
    setRoadMapState(true)
    setDropdownState(!dropdownState)
  }



    if(homePageState === true){
      return (
        <div className="screen">
        <LinkHeader homePageState={homePageState} mintState={mintState} aboutState={aboutState} loreState={loreState} roadMapState={roadMapState} dropdownState={dropdownState} handleHomePage={handleHomePage} handleMint={handleMint} handleAbout={handleAbout} handleLore={handleLore} handleRoadMap={handleRoadMap} toggleDropdown={toggleDropdown} />
         {/* <Home  /> */}
        </div>

      );
    }
    if(mintState === true){
      return (
        <div className="screen">
        <LinkHeader homePageState={homePageState} mintState={mintState} aboutState={aboutState} loreState={loreState} roadMapState={roadMapState} dropdownState={dropdownState} handleHomePage={handleHomePage} handleMint={handleMint} handleAbout={handleAbout} handleLore={handleLore} handleRoadMap={handleRoadMap} toggleDropdown={toggleDropdown} />
        <Mint  />
        </div>
      );
    }
    if(aboutState === true){
      return (
        <div className="screen">
        <LinkHeader homePageState={homePageState} mintState={mintState} aboutState={aboutState} loreState={loreState} roadMapState={roadMapState} dropdownState={dropdownState} handleHomePage={handleHomePage} handleMint={handleMint} handleAbout={handleAbout} handleLore={handleLore} handleRoadMap={handleRoadMap} toggleDropdown={toggleDropdown} />
        <About  />
        </div>
      );
    }
    if(loreState === true){
      return (
        <div className="screen">
        <LinkHeader homePageState={homePageState} mintState={mintState} aboutState={aboutState} loreState={loreState} roadMapState={roadMapState} dropdownState={dropdownState} handleHomePage={handleHomePage} handleMint={handleMint} handleAbout={handleAbout} handleLore={handleLore} handleRoadMap={handleRoadMap} toggleDropdown={toggleDropdown} />
        <div>
          <Team  />
        </div>
        </div>
      );
    }
    if(roadMapState === true){
      return (
        <div className="screen">
        <LinkHeader homePageState={homePageState} mintState={mintState} aboutState={aboutState} loreState={loreState} roadMapState={roadMapState} dropdownState={dropdownState} handleHomePage={handleHomePage} handleMint={handleMint} handleAbout={handleAbout} handleLore={handleLore} handleRoadMap={handleRoadMap} toggleDropdown={toggleDropdown} />
        <RoadMap  />
        </div>
      );
    }
}
