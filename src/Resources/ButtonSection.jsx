import React from "react";
import { Button, Image } from "react-bootstrap";

function ButtonSection(props) {
    return (

            <Button id={props.Id} className="NavLastBtn"> {props.btnName} <Image src={props.btnImg} /> </Button>
    );
}

export default ButtonSection;