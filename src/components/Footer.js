import React from "react";
import styled from "styled-components";
import ShareButton from "./ShareButton";

const FooterContainer = styled.div`
  background-color: #fde221;
  min-height: 5vh;
  padding: 1rem;
`;

const PatreonButton = styled.a`
  padding: 0.5rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <PatreonButton
        href="https://www.patreon.com/bePatron?u=32927319"
        data-patreon-widget-type="become-patron-button"
      >
        Unterstütze uns auf Patreon!
      </PatreonButton>
      <ShareButton />
      <a href="mailto:info@aufabier.at">info@aufabier.at</a>
    </FooterContainer>
  );
};

export default Footer;
