import React from "react";
import ButtonSection from "../../Resources/ButtonSection"
import NavArrowRight from "./ NavArrowRight .png";


function RightNavSection() {
    return (

            <div className="RightNavSectionContainer" >
                    <ButtonSection
                        btnName="Login"
                        class="NavLastBtn"
                        Id="NavLastBtnLogin"
                    />

                    <ButtonSection
                        btnName="Join US"
                        class="NavLastBtn"
                        btnImg={NavArrowRight}
                    />
            </div>

    );
}

export default RightNavSection;