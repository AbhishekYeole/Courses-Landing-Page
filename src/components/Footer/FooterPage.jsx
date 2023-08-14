import React from "react";
import FooterCard1 from "./FooterCard1";
import FooterLastCard from "./FooterLastCard";

function FooterPage() {
    return (
        <div className="FooterOuterContainer">

            <div className="FooterInnerContainer">
                
                <div className="FooterRowContainer">
                    <FooterCard1 
                        heading=""
                        link1=""
                        link2=""
                        link3=""
                        link4=""
                    />

                    <FooterCard1 
                        heading=""
                        link1=""
                        link2=""
                        link3=""
                        link4=""
                    />

                    <FooterCard1 
                        heading=""
                        link1=""
                        link2=""
                        link3=""
                        link4=""
                    />

                    <FooterCard1 
                        heading=""
                        link1=""
                        link2=""
                        link3=""
                        link4=""
                    />

                    <FooterLastCard />

                    {/* <div className="FooterLastCard">
                        <h5 className="FooterCardTextH5">Get In Touch</h5>

                        <div className="FooterLastCardSecondBox">

                            <span className="FooterCardRows">
                                <Image src={FooterPhone} />
                                <h6>(480) 555-0103</h6>
                            </span>

                        </div>
                    </div> */}
                </div>
            </div>

        </div>
    );
}


export default FooterPage;