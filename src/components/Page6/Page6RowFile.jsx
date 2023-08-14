import React from "react";
import Page6Card from "./Page6Card";
import Card6Img1 from "./Card6Img1.png";
import Card6Img2 from "./Card6Img2.png";


function Page6Row() {
    return (
        <div className="Page6RowMainContainer">
            <Page6Card
                img={Card6Img1}
                about="Slate helps you see how many more days you need to work to reach your financial goal for the month and year."
                name="Regina Miles"
                designation = "Designer"
            />

            <Page6Card
                img={Card6Img2}
                about="Slate helps you see how many more days you need to work to reach your financial goal for the month and year."
                name="Regina Miles"
                designation = "Designer"
            />
        </div>
    );
}

export default Page6Row;