import React from "react";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import CoverImg1 from "./Sourses/CoverImg1.png";
import CoverImg2 from "./Sourses/CoverImg2.png";

function Page1Image() {
  return (
    <Container id="CoverImgContainer">
      <div className="CoverImgBox">
        <Image src={CoverImg1} alt="img" id="Coverimg1" />
        <Image src={CoverImg2} alt="img" id="Coverimg2" />
      </div>
    </Container>
  );
}

export default Page1Image;
