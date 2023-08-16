import React from "react";

function CoverPageTextBoxCard(props) {
    return (

        <div className="CoverPage3TextBoxRow1">

            <div className="CoverPage3TextBox">

                    <h6 className="CoverPageTextBox1">{ props.h6Text }</h6>

                    <h2 className="CoverPageTextBox2">{ props.h2Text }</h2>

                    <p className="CoverPageTextBox3"> Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>

                
            </div>

        </div>
    );
}

export default CoverPageTextBoxCard;