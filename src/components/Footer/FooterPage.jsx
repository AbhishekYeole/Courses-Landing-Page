import React from "react";
import FooterCard1 from "./FooterCard1";
import FooterLastCard from "./FooterLastCard";

function FooterPage() {
    return (
      <div className="FooterOuterContainer">
        <div className="FooterInnerContainer">
          <div className="FooterRowContainer">
            <FooterCard1 heading="" link1="" link2="" link3="" link4="" />

            <FooterCard1 heading="" link1="" link2="" link3="" link4="" />

            <FooterCard1 heading="" link1="" link2="" link3="" link4="" />

            <FooterCard1 heading="" link1="" link2="" link3="" link4="" />

            <FooterLastCard />
          </div>
        </div>
      </div>
    );
}


export default FooterPage;