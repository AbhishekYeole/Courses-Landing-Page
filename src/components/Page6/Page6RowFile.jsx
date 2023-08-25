import React from "react";
import Page6Card from "./Page6Card";
// import Card6Img1 from "./Card6Img1.png";
// import Card6Img2 from "./Card6Img2.png";
import Carousel from 'react-bootstrap/Carousel';
import useMediaQueries from "media-queries-in-react";
import Page6Object from "../../Objects/Page6Object";

function CreateEntryPage6(ObjData) {
  return this.isMobile ? (
    <Carousel.Item>
      <Page6Card
        key={ObjData.id}
        img={ObjData.Img}
        review={ObjData.Review}
        name={ObjData.Name}
        designation={ObjData.Occupation}
      />
    </Carousel.Item>
  ) : this.isTablet ? (
    <Carousel.Item>
      <Page6Card
        key={ObjData.id}
        img={ObjData.Img}
        review={ObjData.Review}
        name={ObjData.Name}
        designation={ObjData.Occupation}
      />
    </Carousel.Item>
  ) : (
    <Page6Card
      key={ObjData.id}
      img={ObjData.Img}
      review={ObjData.Review}
      name={ObjData.Name}
      designation={ObjData.Occupation}
    />
  );
}

function Page6Row() {
  const mediaQueries = useMediaQueries({
    mobile: "screen and (max-width: 600px)",
    tablet: "screen and (min-width: 601px) and (max-width: 1023px)",
  });

  return mediaQueries.mobile ? (
    <div className="Page6RowMainContainer">
      <Carousel>
        {Page6Object.map(CreateEntryPage6, { isMobile: true })}
      </Carousel>
    </div>
  ) : mediaQueries.tablet ? (
    <div className="Page6RowMainContainer">
      <Carousel>
        {Page6Object.map(CreateEntryPage6, { isTablet: true })}
      </Carousel>
    </div>
  ) : (
    <div className="Page6RowMainContainer">
      {Page6Object.map(
        CreateEntryPage6,
        { isMobile: false },
        { isTablet: false }
      )}
    </div>
  );
}

export default Page6Row;