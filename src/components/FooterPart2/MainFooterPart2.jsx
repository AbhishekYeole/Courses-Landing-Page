import React from "react";
import { Image } from "react-bootstrap";
import FacebookLogo from "./FacebookLogo.svg";
import InstagramLogo from "./InstagramLogo.svg";
import TwitterLogo from "./TwitterLogo.svg";

function MainFooterPart2() {
  return (
    <div className="FooterPart2OuterContainer">
      <div className="FooterPart2InnerContainer">
        <div className="FooterPart2TextContainer">
          <div className="FooterPart2TextInnerContainer">
            <div className="FooterPart2H6Text">
              <h6>Made With Love By Figmaland All Right Reserved</h6>
            </div>
          </div>

          <div className="FooterPart2LastOuterContainer">
            <div className="FooterPart2LastInnerContainer">
              <Image id="FacebookLogo" src={FacebookLogo} />

              <Image id="InstagramLogo" src={InstagramLogo} />

              <Image id="TwitterLogo" src={TwitterLogo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainFooterPart2;
