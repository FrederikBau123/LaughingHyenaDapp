import React, { useEffect, useState, useRef } from "react";



export default function Roadmap(){
  return(
    <div className="RoadmapContainer">
      <div className="RoadmapTitle"> ROADMAP</div>
      <div className="RoadmapTopDiv">
        <div className="RoadmapDiv">
          <div className="RoadmapDivTitle">0%</div>
          <div className="RoadmapDivDescription">Laughing Hyenas are ready to mint on our website through a MetaMask wallet

30 Laughing Hyenas are reserved for promotions and giveaways </div>
        </div>
        <div className="RoadmapDiv">
          <div className="RoadmapDivTitle">25%</div>
          <div className="RoadmapDivDescription">Get listed on Rarity Tools

The community wallet is open which is going to be used to ensure longevity for our holder's beneficial purposes determined by our community through voting

First milestone giveaway </div>
        </div>
        <div className="RoadmapDiv">
          <div className="RoadmapDivTitle">50%</div>
          <div className="RoadmapDivDescription">We will start the community Logo competition. Whoever comes up with the best logo that will be used as a rebrand and our future merch store will win 1 eth and 1 free Hyena

Our team starts cooking our next project in the lab

Second milestone giveaway </div>
        </div>
      </div>
      <div className="RoadmapBottomDiv">
        <div className="RoadmapDiv">
          <div className="RoadmapDivTitle">75%</div>
          <div className="RoadmapDivDescription">One of our main missions is to convert our art and creativity into a meaningful global action targeting social and humanitarian issues. We will make a donation to a charity of our holder’s choice </div>
        </div>
        <div className="RoadmapDiv">
          <div className="RoadmapDivTitle">100%</div>
          <div className="RoadmapDivDescription">Get verified on OpenSea

More prizes and giveaways

Merch store is open. Holders that own the 6 unique sets of Hyenas will receive free merch

Our next project is dropping into the AO. Our holders will get an airdrop for every Hyena they own

We believe in decentralizing everything. So, DAO inbound!</div>
        </div>
      </div>
    </div>
  )
}
