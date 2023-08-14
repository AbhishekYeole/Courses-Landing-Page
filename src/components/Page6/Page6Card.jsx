import React from "react";
import { Image } from "react-bootstrap";
import Card6SolidStar from "./Card6SolidStar.svg";
import Card6HollowStar from "./Card6HollowStar.svg";

function Page6Card(props) {
    return (
        <div className="Page6CardMainContainer">

            <Image className="Page6CardImgBox" src={props.img} roundedCircle />

            <div className="Page6CardTextBox">
                <p className="Page6CardTextParagraph">
                    { props.about }
                </p>

                <div className="Page6CardStarRatingBox">
                    <Image src={Card6SolidStar} />
                    <Image src={Card6SolidStar} />
                    <Image src={Card6SolidStar} />
                    <Image src={Card6SolidStar} />
                    <Image src={Card6HollowStar} />
                </div>

                <div className="Page6CardBottomBox">

                    <h5 className="Page6CardBottomH5">
                        { props.name }
                    </h5>

                    <h6 className="Page6CardBottomH6">
                        { props.designation }
                    </h6>

                </div>
            </div>

        </div>
    );
}

export default Page6Card;