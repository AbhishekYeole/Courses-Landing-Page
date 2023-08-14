import React from "react";
import { Image } from "react-bootstrap";
import Row2Col1Img from "./SourcesPage3/Row2Col1Img.png";
import Row2Col2Img from "./SourcesPage3/Row2Col2Img.png";
import Row2Col3Img from "./SourcesPage3/Row2Col3Img.png";
import Row2Col4Img from "./SourcesPage3/Row2Col4Img.png";
import CoverPage3Card from "./CoverPage3Card";
import FavoriteIcon from "./SourcesPage3/FavoriteIcon.svg";
import BucketIcon from "./SourcesPage3/BucketIcon.svg";
import ViewIcon from "./SourcesPage3/ViewIcon.svg";

function SecondSection() {
    return (

        <div className="CoverPage3TextBoxRow2">

            <div className="TextBoxRow2Col">
                <Image className="Row2Col1Img" src={Row2Col1Img} alt="img" />  

                <div className="Row2ColfloatImg">
                    <h6>Sale</h6>
                </div>

                <div className="Row2ColFloatBtnBox">

                    <div className="Row2ColFloatBtn">
                        <Image className="FloatBtnIcon" src={FavoriteIcon} alt="favorite icon" />
                    </div>

                    <div className="Row2ColFloatBtn">
                        <Image className="FloatBtnIcon" src={BucketIcon} alt="bucket icon" />
                    </div>

                    <div className="Row2ColFloatBtn">
                        <Image className="FloatBtnIcon" src={ViewIcon} alt="view icon" />
                    </div>

                </div>

                <CoverPage3Card
                    row1Text="Expert instruction"
                    row2Text = "Our Experts Teacher"
                />
            </div>

            <div className="TextBoxRow2Col">
                <Image className="Row2Col1Img" src={Row2Col2Img} alt="img" />
                
                <div className="Row2ColfloatImg">
                    <h6>Sale</h6>
                </div>

                <div className="Row2ColFloatBtnBox">

                    <div className="Row2ColFloatBtn">
                        <Image className="FloatBtnIcon" src={FavoriteIcon} alt="favorite icon" />
                    </div>

                    <div className="Row2ColFloatBtn">
                        <Image className="FloatBtnIcon" src={BucketIcon} alt="bucket icon" />
                    </div>

                    <div className="Row2ColFloatBtn">
                        <Image className="FloatBtnIcon" src={ViewIcon} alt="view icon" />
                    </div>

                </div>

                <CoverPage3Card
                    row1Text="27 OnlineCourses"
                    row2Text = "Get Quality Education"
                />
            </div>

            <div className="TextBoxRow2Col">

                <Image className="Row2Col1Img" src={Row2Col3Img} alt="img" />
                
                <div className="Row2ColfloatImg">
                    <h6>Sale</h6>
                </div>

                <div className="Row2ColFloatBtnBox">

                    <div className="Row2ColFloatBtn">
                        <Image className="FloatBtnIcon" src={FavoriteIcon} alt="favorite icon" />
                    </div>

                    <div className="Row2ColFloatBtn">
                        <Image className="FloatBtnIcon" src={BucketIcon} alt="bucket icon" />
                    </div>

                    <div className="Row2ColFloatBtn">
                        <Image className="FloatBtnIcon" src={ViewIcon} alt="view icon" />
                    </div>

                </div>

                <CoverPage3Card
                    row1Text = "training Courses"
                    row2Text = "Our Popular Courses"
                />
            </div>

            <div className="TextBoxRow2Col">
                <Image className="Row2Col1Img" src={Row2Col4Img} alt="img" />
                
                <div className="Row2ColfloatImg">
                    <h6>Sale</h6>
                </div>

                <div className="Row2ColFloatBtnBox">

                    <div className="Row2ColFloatBtn">
                        <Image className="FloatBtnIcon" src={FavoriteIcon} alt="favorite icon" />
                    </div>

                    <div className="Row2ColFloatBtn">
                        <Image className="FloatBtnIcon" src={BucketIcon} alt="bucket icon" />
                    </div>

                    <div className="Row2ColFloatBtn">
                        <Image className="FloatBtnIcon" src={ViewIcon} alt="view icon" />
                    </div>

                </div>

                <CoverPage3Card
                    row1Text="Certified Teacher"
                    row2Text = "Every Client Matters"
                />
            </div>

        </div>
    );
}

export default SecondSection;