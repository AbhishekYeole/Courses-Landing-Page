import React from "react";
import FooterPhone from "./FooterPhone.svg";
import FooterMap from "./FooterMap.svg";
import FooterMessage from "./FooterMessage.svg";
import { Image } from "react-bootstrap";

function FooterLastCard() {
    return (
        <div className="FooterLastCardMainBox">

            <h5 className="FooterLastCardH5Text">Get In Touch</h5>

            <div className="FooterLastCardInnerBox">

                <div className="FooterLastCardRow">
                    <Image id="phoneIconImg" src={FooterPhone} alt="phone icon" />
                    <h6 className="FooterLastCardRowH6">(480) 555-0103</h6>
                </div>

                <div className="FooterLastCardRow">
                    <Image id="mapIconImg" src={FooterMap} alt="phone icon" />
                    <h6 className="FooterLastCardRowH6">4517 Washington Ave. Manchester, Kentucky 39495</h6>
                </div>

                <div className="FooterLastCardRow">
                    <Image id="messageIconImg" src={FooterMessage} alt="phone icon" />
                    <h6 className="FooterLastCardRowH6">debra.holt@example.com</h6>
                </div>

            </div>


        </div>
    );
}

export default FooterLastCard;