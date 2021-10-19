import React, { useEffect, useState, useRef } from "react";
//import Home from './home.js'
import Mint from './mint.js'
import About from './about.js'
//import Lore from './lore.js'
//import RoadMap from './roadmap.js'
import LinkHeader from './linkHeader.js'


export default function App() {
  const [homePageState, sethomePageState] = useState(false);
  const [mintState, setMintState] = useState(false);
  const [aboutState, setAboutState] = useState(true);
  const [loreState, setLoreState] = useState(false);
  const [roadMapState, setRoadMapState] = useState(false);

  function handleHomePage(){
    setMintState(false)
    sethomePageState(true)
    setAboutState(false)
    setLoreState(false)
    setRoadMapState(false)
  }
  function handleMint(){
    setMintState(true)
    sethomePageState(false)
    setAboutState(false)
    setLoreState(false)
    setRoadMapState(false)
  }
  function handleAbout(){
    setMintState(false)
    sethomePageState(false)
    setAboutState(true)
    setLoreState(false)
    setRoadMapState(false)
  }
  function handleLore(){
    setMintState(false)
    sethomePageState(false)
    setAboutState(false)
    setLoreState(true)
    setRoadMapState(false)
  }
  function handleRoadMap(){
    setMintState(false)
    sethomePageState(false)
    setAboutState(false)
    setLoreState(false)
    setRoadMapState(true)
  }



    if(homePageState === true){
      return (
        <div>
        <LinkHeader homePageState={homePageState} mintState={mintState} aboutState={aboutState} loreState={loreState} roadMapState={roadMapState} handleHomePage={handleHomePage} handleMint={handleMint} handleAbout={handleAbout} handleLore={handleLore} handleRoadMap={handleRoadMap} />
         {/* <Home  /> */}
        </div>

      );
    }
    if(mintState === true){
      return (
        <div>
        <LinkHeader homePageState={homePageState} mintState={mintState} aboutState={aboutState} loreState={loreState} roadMapState={roadMapState} handleHomePage={handleHomePage} handleMint={handleMint} handleAbout={handleAbout} handleLore={handleLore} handleRoadMap={handleRoadMap} />
        <Mint  />
        </div>
      );
    }
    if(aboutState === true){
      return (
        <div>
        <LinkHeader homePageState={homePageState} mintState={mintState} aboutState={aboutState} loreState={loreState} roadMapState={roadMapState} handleHomePage={handleHomePage} handleMint={handleMint} handleAbout={handleAbout} handleLore={handleLore} handleRoadMap={handleRoadMap} />
        <About  /> 
        </div>
      );
    }
    if(loreState === true){
      return (
        <div>
        <LinkHeader homePageState={homePageState} mintState={mintState} aboutState={aboutState} loreState={loreState} roadMapState={roadMapState} handleHomePage={handleHomePage} handleMint={handleMint} handleAbout={handleAbout} handleLore={handleLore} handleRoadMap={handleRoadMap} />
      //  {/* <Lore  /> */}
        </div>
      );
    }
    if(roadMapState === true){
      return (
        <div>
        <LinkHeader homePageState={homePageState} mintState={mintState} aboutState={aboutState} loreState={loreState} roadMapState={roadMapState} handleHomePage={handleHomePage} handleMint={handleMint} handleAbout={handleAbout} handleLore={handleLore} handleRoadMap={handleRoadMap} />
      //  {/* <RoadMap  /> */}
        </div>
      );
    }
}
