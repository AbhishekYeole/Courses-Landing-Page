import React from "react";
import { Button, Image } from "react-bootstrap";

function ButtonSection(props) {
    return (

            <Button id={props.Id} className="NavLastBtn"> {props.btnName} <Image id={props.ImgId} src={props.btnImg} /> </Button>
    );
}

export default ButtonSection;