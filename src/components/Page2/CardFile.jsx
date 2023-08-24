import React from "react";
import { Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

// console.log(Page2Object);

function CardFile(props) {
  return (
    // <Col id={props.mainDiv} className="CardMainDiv">
    //   <div className="CardMainDivStack">
    //     <Col id={props.colId} className="Cardimgdiv" sm={6}>
    //       <Image src={props.Link} alt="img" id="balackboard" />
    //     </Col>

    //     <h5 className="CardH5Div">{props.FirstHeading}</h5>

    //     <div className="HorizontalDiv"></div>

    //     <p className="Page2CardParagraphText">
    //       The gradual accumulation of information about{" "}
    //     </p>
    //   </div>
    // </Col>

    <Col id={props.mainDiv} className="CardMainDiv">
      <div className="CardMainDivStack">
        <Col id={props.colId} className="Cardimgdiv" sm={6}>
          <Image src={props.Img} id="balackboard" />
        </Col>

        <h5 className="CardH5Div">{props.Head}</h5>

        <div className="HorizontalDiv"></div>

        <p className="Page2CardParagraphText">{props.Para}</p>
      </div>
    </Col>
  );
}

export default CardFile;
