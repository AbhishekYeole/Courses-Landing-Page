import React from "react";
import IconStar from "./SourcesPage3/IconStar.svg";
import { Image } from "react-bootstrap";
import DownloadIcon from "./SourcesPage3/DownloadIcon.svg";
import CardRowRightIcon from "./SourcesPage3/CardRowRightIcon.svg"

function CoverPage3Card(props) {
    return (
        
        <div className="CardTextBox">

            <div className="CardTextRow1">

                <div className="CardRow1Text">
                    <p>{ props.row1Text }</p>
                </div>

                <div className="CardRow1Star">
                    <Image className="StarImg" src={IconStar} alt="star img" />


                    <small className="StarRating">4.9</small>

                </div>

            </div>

                <h5 className="CardRow2TextH5">{ props.row2Text }</h5>

            {/* <div className="CardRow3TextParagraph"> */}
                <p className="CardRow3TextParagraph">We focus on ergonomics and meeting you....</p>
            {/* </div> */}

            <div className="CardRow4Sales">
                <Image className="downloadicon" src={DownloadIcon} alt="download icon" />

                <h6 className="SalesText">15 Sales</h6>

            </div>

            <div className="CardRow5Prices">
                <div className="leftPriceH5">
                    <h5>$16.48</h5>
                </div>

                <div className="rightPriceH5">
                    <h5>$6.48</h5>
                </div>
            </div>

            <div className="CardRow6Button">
                <div className="Row6BtnTextH6">
                    <h6>Learn More</h6>
                </div>

                <Image className="Row6BtnArrow" src={CardRowRightIcon} alt="right icon" />

            </div>

        </div>

    );
}

export default CoverPage3Card;