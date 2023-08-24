import React from "react";
import CoverPage2Part2 from "./CoverPage2Part2";
import CoverPageTextBoxCard from "../../Resources/CoverPageTextBoxMainRow1";

function MainPage2() {
    return (

        <div className="CoverPage2OuterBox">
            
            <div className="CoverPage2InnerBox">

                <CoverPageTextBoxCard
                    h6Text="Practice Advice"
                    h2Text="Most Popular Courses"
                    paragraphText = ""
                />

                <CoverPage2Part2 /> 

            </div>

        </div>
    );

}

export default MainPage2;