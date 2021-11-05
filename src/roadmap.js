import React, { useEffect, useState, useRef } from "react";



export default function Roadmap(){
  return(
    <div className="RoadmapContainer">
      <div className="RoadmapTitle"> ROADMAP</div>
      <div className="RoadmapTopDiv">
        <div className="RoadmapDiv">
          <div className="RoadmapDivTitle">0%</div>
          <div className="RoadmapDivDescription"><br />
          <span> Laughing Hyenas are ready to mint on our website through a MetaMask wallet  </span><br />
          <span> 30 Laughing Hyenas are reserved for promotions and giveaways  </span><br />
          </div>
        </div>
        <div className="RoadmapDiv">
          <div className="RoadmapDivTitle">25%</div>
          <div className="RoadmapDivDescription"><br />
          <span> Get listed on Rarity Tools  </span><br />
          <span> The community wallet is open which is going to be used to ensure longevity for our holder's beneficial purposes determined by our community through voting  </span><br />
          <span > First milestone giveaway  </span>
          </div>
        </div>
        <div className="RoadmapDiv">
          <div className="RoadmapDivTitle">50%</div>
          <div className="RoadmapDivDescription"><br />
          <span> We will start the community Logo competition. Whoever comes up with the best logo that will be used as a rebrand and our future merch store will win 1 eth and 1 free Hyena  </span><br />
          <span> Our team starts cooking our next project in the lab </span><br />
          <span > Second milestone giveaway </span>
        </div>
      </div>
      </div>
      <div className="RoadmapBottomDiv">
        <div className="RoadmapDiv">
          <div className="RoadmapDivTitle">75%</div>
          <div className="RoadmapDivDescription"><br />
          <span > One of our main missions is to convert our art and creativity into a meaningful global action targeting social and humanitarian issues. We will make a donation to a charity of our holder’s choice </span>
          </div>
        </div>
        <div className="RoadmapDiv">
          <div className="RoadmapDivTitle">100%</div>
          <div className="RoadmapDivDescription"><br />
          <span> Get verified on OpenSea   </span><br />
          <span> More prizes and giveaways  </span><br />
          <span > More prizes and giveaways  </span><br />
          <span > Our next project is dropping into the AO. Our holders will get an airdrop for every Hyena they own    </span><br />
          <span > We believe in decentralizing everything. So, DAO inbound!  </span><br />
          </div>
        </div>
      </div>
    </div>
  )
}
