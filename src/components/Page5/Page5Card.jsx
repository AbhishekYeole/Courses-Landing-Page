import React from "react";
import Card5 from "./Card5";
import Carousel from 'react-bootstrap/Carousel';
import useMediaQueries from "media-queries-in-react";
import Page5Object from "../../Objects/Page5Object";

function CreateEntry(ObjData) {
  return this.isMobile ? (
    <Carousel.Item>
      <div className="Card5OuterContainer">
        <Card5
          row1Text={ObjData.ProductOffer}
          row2Text={ObjData.Info}
          row3Text={ObjData.ProductPrice}
          row4Text={ObjData.Discription}
          bottomRow1={ObjData.Line1}
          bottomRow2={ObjData.Line2}
          bottomRow3={ObjData.Line3}
          bottomRow4={ObjData.Line4}
          bottomRow5={ObjData.Line5}
        />
      </div>
    </Carousel.Item>
  ) : (
    <div className="Card5OuterContainer">
      <Card5
        row1Text={ObjData.ProductOffer}
        row2Text={ObjData.Info}
        row3Text={ObjData.ProductPrice}
        row4Text={ObjData.Discription}
        bottomRow1={ObjData.Line1}
        bottomRow2={ObjData.Line2}
        bottomRow3={ObjData.Line3}
        bottomRow4={ObjData.Line4}
        bottomRow5={ObjData.Line5}
      />
    </div>
  );
}

function CreatePage5TabletCard() {
  let Card = [];

  for (let i = 0; i + 1 < Page5Object.length; i += 2) {
    Card.push(
      <div className="Page5CarouselDiv">
        <Card5
          row1Text={Page5Object[i].ProductOffer}
          row2Text={Page5Object[i].Info}
          row3Text={Page5Object[i].ProductPrice}
          row4Text={Page5Object[i].Discription}
          bottomRow1={Page5Object[i].Line1}
          bottomRow2={Page5Object[i].Line2}
          bottomRow3={Page5Object[i].Line3}
          bottomRow4={Page5Object[i].Line4}
          bottomRow5={Page5Object[i].Line5}
        />

        <Card5
          row1Text={Page5Object[i + 1].ProductOffer}
          row2Text={Page5Object[i + 1].Info}
          row3Text={Page5Object[i + 1].ProductPrice}
          row4Text={Page5Object[i + 1].Discription}
          bottomRow1={Page5Object[i + 1].Line1}
          bottomRow2={Page5Object[i + 1].Line2}
          bottomRow3={Page5Object[i + 1].Line3}
          bottomRow4={Page5Object[i + 1].Line4}
          bottomRow5={Page5Object[i + 1].Line5}
        />
      </div>
    );
  }

  if (Page5Object.length % 2 === 1) {
    Card.push(
      <div className="Page5CarouselDiv">
        {/* <Card5
          row1Text={Page5Object[Page5Object.length - 2].ProductOffer}
          row2Text={Page5Object[Page5Object.length - 2].Info}
          row3Text={Page5Object[Page5Object.length - 2].ProductPrice}
          row4Text={Page5Object[Page5Object.length - 2].Discription}
          bottomRow1={Page5Object[Page5Object.length - 2].Line1}
          bottomRow2={Page5Object[Page5Object.length - 2].Line2}
          bottomRow3={Page5Object[Page5Object.length - 2].Line3}
          bottomRow4={Page5Object[Page5Object.length - 2].Line4}
          bottomRow5={Page5Object[Page5Object.length - 2].Line5}
        /> */}
        <Card5
          row1Text={Page5Object[Page5Object.length - 1].ProductOffer}
          row2Text={Page5Object[Page5Object.length - 1].Info}
          row3Text={Page5Object[Page5Object.length - 1].ProductPrice}
          row4Text={Page5Object[Page5Object.length - 1].Discription}
          bottomRow1={Page5Object[Page5Object.length - 1].Line1}
          bottomRow2={Page5Object[Page5Object.length - 1].Line2}
          bottomRow3={Page5Object[Page5Object.length - 1].Line3}
          bottomRow4={Page5Object[Page5Object.length - 1].Line4}
          bottomRow5={Page5Object[Page5Object.length - 1].Line5}
        />
      </div>
    );
  }

  return (
    <Carousel>
      {Card.map((card) => (
        <Carousel.Item>
          <div className="Page5CarouselDiv">
            <div className="Card5OuterContainer">{card}</div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

function Page5Card() {
  const mediaQueries = useMediaQueries({
    mobile: "screen and (max-width: 600px)",
    tablet: "screen and (min-width: 601px) and (max-width: 1023px)",
  });

  return mediaQueries.mobile ? (
    <div className="Page5CardMainDiv">
      <Carousel>{Page5Object.map(CreateEntry, { isMobile: true })}</Carousel>
    </div>
  ) : mediaQueries.tablet ? (
    <div className="Page5CardMainDiv">{CreatePage5TabletCard()}</div>
  ) : (
    <div className="Page5CardMainDiv">
      {Page5Object.map(CreateEntry, { isMobile: false })}
    </div>
  );
}

export default Page5Card;