import React from "react";
import { Image } from "react-bootstrap";
import IconArrow from "./IconArrow.svg";


function Page4Text() {
    return (
      <div className="Page4TextOuterBox">
        <div className="FixedDiv"></div>

        <h2 className="Page4TextBoxH2Box">
          Most Popular <br /> Courses
        </h2>

        <p className="Page4TextBoxParagraph">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>

        <div className="Page4TextBoxLearnMoreBox">
          <h6 className="Page4TextBoxLearnMoreH6">Learn More</h6>

          <Image id="Page4ArrowIconimg" src={IconArrow} alt="Arrow Icon" />
        </div>
      </div>
    );
}

export default Page4Text;