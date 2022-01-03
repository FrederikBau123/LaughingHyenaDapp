import React, { useEffect, useState, useRef } from "react";
import Home from './home.js'
import Mint from './mint.js'
import About from './about.js'
import Team from './team.js'
import RoadMap from './roadmap.js'
import Lore from './lore.js'
import LinkHeader from './linkHeader.js'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Particles from "react-tsparticles";
import bone from "./bone.png"
import meat from "./meat.png"

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

  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const SmoothScroll = () => (
    <div className="screen">
    {/*<Particles
      id="tsparticles1"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 144,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 3,
          },
          opacity: {
            value: 1,
          },
          shape: {
            type: "images",
            options: {
              images: {
                src: bone
              }
            }
          },
          size: {
            random: true,
            value: 25,
          },
        },
        detectRetina: true,
      }}
    />
    <Particles
      id="tsparticles2"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 144,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 3,
          },
          opacity: {
            value: 1,
          },
          shape: {
            type: "images",
            options: {
              images: {
                src: meat
              }
            }
          },
          size: {
            random: true,
            value: 25,
          },
        },
        detectRetina: true,
      }}
    />*/}
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
          <a href="https://discord.gg/hyenasnft" target="_blank"><img className="headerSocialsDiscord" src={"/config/images/discord.png"}/></a>
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
    <section id='lore'>
      <Lore     />
    </section>
    </div>
)



      return (

        <SmoothScroll />

      );
}
