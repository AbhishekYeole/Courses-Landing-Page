import React from "react";
import Card5Icon from "./Card5Icon.png";
import { Button, Image } from "react-bootstrap";
import Card5SelectIcon from "./Card5SelectIcon.png";

function Card5(props) {
    return (
        <div className="Card5Container">
            
            <div className="Card5IconBox">
                <Image className="Card5IconImg" src={Card5Icon} alt="favorite icon" />
            </div>

            <h3 className="Card5Row2">
                { props.row1Text }
            </h3>

            <h6 className="CardRow3">
                { props.row2Text }
            </h6>

            <div className="Card5PriceBox">
                <h2 className="Card5PriceInNumberRow">
                    { props.row3Text }
                </h2>

                <h6 className="Card5PerMonthRow">
                    Per Month
                </h6>
            </div>

            <p className="Card5Row5">
                { props.row4Text }
            </p>

            <Button className="Card5Btn">
                Try for free
            </Button>

            <div className="Card5BottomPartBox">

                <div className="Card5BottomPartRow">
                    <div className="Card5BottomPartRowGreenImgBox">
                        <Image src={Card5SelectIcon} alt="select iocn" />
                    </div>

                    <h6 className="Card5BottomPartH6Text">
                        Unlimited product updates
                    </h6>
                </div>


                <div className="Card5BottomPartRow">
                    <div className="Card5BottomPartRowGreenImgBox">
                        <Image src={Card5SelectIcon} alt="select iocn" />
                    </div>

                    <h6 className="Card5BottomPartH6Text">
                        Unlimited product updates
                    </h6>
                </div>


                <div className="Card5BottomPartRow">
                    <div className="Card5BottomPartRowGreenImgBox">
                        <Image src={Card5SelectIcon} alt="select iocn" />
                    </div>

                    <h6 className="Card5BottomPartH6Text">
                        Unlimited product updates
                    </h6>
                </div>


                <div className="Card5BottomPartRow">
                    <div className="Card5BottomPartRowGreyImgBox">
                        <Image src={Card5SelectIcon} alt="select iocn" />
                    </div>

                    <h6 className="Card5BottomPartH6Text">
                        1GB  Cloud storage
                    </h6>
                </div>


                <div className="Card5BottomPartRow">
                    <div className="Card5BottomPartRowGreyImgBox">
                        <Image src={Card5SelectIcon} alt="select iocn" />
                    </div>

                    <h6 className="Card5BottomPartH6Text">
                        Email and community support
                    </h6>
                </div>

            </div>

        </div>
    );
}

export default Card5;