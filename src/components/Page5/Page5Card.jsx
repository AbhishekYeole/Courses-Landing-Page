import React from "react";
import Card5 from "./Card5";
import Carousel from 'react-bootstrap/Carousel';
import useMediaQueries from "media-queries-in-react";


function Page5Card() {
    
    const mediaQueries = useMediaQueries({
        mobile: "screen and (max-width: 480px)",
    });

    return (
        

            mediaQueries.mobile ?
                <div className="Page5CardMainDiv">
                <Carousel>
                    <Carousel.Item>
                        <div className="Card5OuterContainer">
                            <Card5
                                row1Text="FREE"
                                row2Text="Organize across all apps by hand"
                                row3Text="19$"
                                row4Text="Slate helps you see how many more days you need..."
                                bottomRow1="Unlimited product updates 1"
                                bottomRow2="Unlimited product updates 1"
                                bottomRow3="Unlimited product updates 1"
                                bottomRow4="1GB  Cloud storage"
                                bottomRow5="Email and community support"
                            />
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div id="Card5MiddleContainer" className="Card5OuterContainer">
                            <Card5
                                row1Text="FREE"
                                row2Text="Organize across all apps by hand"
                                row3Text="20$"
                                row4Text="Slate helps you see how many more days you need..."
                                bottomRow1="Unlimited product updates 2"
                                bottomRow2="Unlimited product updates 2"
                                bottomRow3="Unlimited product updates 2"
                                bottomRow4="1GB  Cloud storage"
                                bottomRow5="Email and community support"
                            />

                            <div className="Card5MiddleNewLogo">
                                <h3>New</h3>
                            </div>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className="Card5OuterContainer">
                            <Card5
                                row1Text="FREE"
                                row2Text="Organize across all apps by hand"
                                row3Text="21$"
                                row4Text="Slate helps you see how many more days you need..."
                                bottomRow1="Unlimited product updates 3"
                                bottomRow2="Unlimited product updates 3"
                                bottomRow3="Unlimited product updates 3"
                                bottomRow4="1GB  Cloud storage"
                                bottomRow5="Email and community support"
                            />
                        </div>
                    </Carousel.Item>


                    </Carousel> 
            </div> : <div className="Page5CardMainDiv">

                    <div className="Card5OuterContainer">
                            <Card5
                                row1Text="FREE"
                                row2Text="Organize across all apps by hand"
                                row3Text="19$"
                                row4Text="Slate helps you see how many more days you need..."
                                bottomRow1="Unlimited product updates 1"
                                bottomRow2="Unlimited product updates 1"
                                bottomRow3="Unlimited product updates 1"
                                bottomRow4="1GB  Cloud storage"
                                bottomRow5="Email and community support"
                            />
                    </div>
                
                 <div id="Card5MiddleContainer" className="Card5OuterContainer">
                <Card5
                    row1Text = "FREE"
                    row2Text = "Organize across all apps by hand"
                    row3Text = "20$"
                    row4Text = "Slate helps you see how many more days you need..."
                    bottomRow1 = "Unlimited product updates 2"
                    bottomRow2 = "Unlimited product updates 2"
                    bottomRow3 = "Unlimited product updates 2"
                    bottomRow4 = "1GB  Cloud storage"
                    bottomRow5 = "Email and community support"
                />

                <div className="Card5MiddleNewLogo">
                    <h3>New</h3>
                </div>
            </div>

            <div className="Card5OuterContainer">
                <Card5
                    row1Text = "FREE"
                    row2Text = "Organize across all apps by hand"
                    row3Text = "21$"
                    row4Text = "Slate helps you see how many more days you need..."
                    bottomRow1 ="Unlimited product updates 3"
                    bottomRow2 ="Unlimited product updates 3"
                    bottomRow3 ="Unlimited product updates 3"
                    bottomRow4 ="1GB  Cloud storage"
                    bottomRow5 ="Email and community support"
                />
            </div>

                </div> 
                
            
    );
}

export default Page5Card;