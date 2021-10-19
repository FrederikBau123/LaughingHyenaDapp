import React, { useEffect, useState, useRef } from "react";
import * as s from "./styles/globalStyles";
import styled from "styled-components";

export const StyledImg2 = styled.img`
  border-radius: 27px;
  width: 200px;
  @media (min-width: 300px) {
    margin-top: -270px;
    margin-bottom: 75px;
    width: 250px;
  }
  @media (min-width: 600px) {
    width: 250px;
  }
  @media (min-width: 1000px) {
    width: 540px;
  }
  transition: width 0.5s;
`;

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export default function About() {
  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };
  useEffect(() => {
    getConfig();
  });
  const [state, setState] = useState({})
const [CONFIG, SET_CONFIG] = useState({
  CONTRACT_ADDRESS: "",
  SCAN_LINK: "",
  NETWORK: {
    NAME: "",
    SYMBOL: "",
    ID: 0,
  },
  NFT_NAME: "",
  SYMBOL: "",
  MAX_SUPPLY: 1,
  WEI_COST: 0,
  DISPLAY_COST: 0,
  GAS_LIMIT: 0,
  MARKETPLACE: "",
  MARKETPLACE_LINK: "",
  SHOW_BACKGROUND: false,
});
return (
  <s.Screen>
  <s.Container
      flex={1}
      ai={"center"}
      style={{ backgroundColor: "var(--primary)" }}
      image={CONFIG.SHOW_BACKGROUND ? "/config/images/bg.png" : null}
    >
        <s.Container
          flex={2}
          ai={"center"}
          style={{ padding: 24, backgroundColor: "#191919" }}
          image={CONFIG.SHOW_BACKGROUND ? "/config/images/bg.png" : null}
        >
          <ResponsiveWrapper flex={1} style={{ padding: 300 }} test>
            <s.Container flex={1} jc={"center"} ai={"center"}>
              <StyledImg2 alt={"example"} src={"/config/images/41.png"} />
            </s.Container>
            <s.Container flex={1} jc={"center"} ai={"center"}>
            <s.TextDescription2
              style={{
                textAlign: "center"
              }}
            >
              About Laughing Hyenas
            </s.TextDescription2>
              <s.SpacerLarge />
            <s.TextDescription3
              style={{
                textAlign: "center"
              }}
            >
              A collection of 10,000 hyenas, laughing their way to freedom on the ethereum savannas.
              The Laughing Hyenas are randomly generated using 140+ unique attributes.
            </s.TextDescription3>
            </s.Container>
          </ResponsiveWrapper>
       </s.Container>
    </s.Container>
    </s.Screen>
  );
}
