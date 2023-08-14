import React from "react";
import CardFile from "./CardFile";
import blackboards from './blackboards.svg';
import telescope from './telescope.svg';
import CapTop from "./CapTop.svg";
import Bag from "./Bag.svg";

function CoverPage2Part2() {
    return (

            <div className="Page2CardRow" >
                <div className="CardFile CardFile1">
                    <CardFile
                        FirstHeading="Certified Teachers" 
                        Link={blackboards}
                        colId = "BlackboardsDiv"
                    />
                </div>

                <div className="CardFile">
                    <CardFile
                        FirstHeading="Training Courses"
                        Link={telescope}
                        colId="TelescopeDiv"
                    />
                </div>

                <div className="CardFile CardFile3">
                    <CardFile
                        FirstHeading="Training Courses"
                        Link={CapTop}
                        colId="CapDiv"
                        mainDiv="CardMainDiv3"
                        dividerColor="divideColor"
                        paragraphId = "Page3Card3Paragraph"
                    />
                </div>

                <div className="CardFile">
                    <CardFile
                        FirstHeading="Lifetime Access"
                        Link={Bag}
                        colId="BagDiv"
                    />
                </div>
            </div>

    );
}

export default CoverPage2Part2;