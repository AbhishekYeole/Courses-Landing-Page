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
      {/* <Carousel>
        <Carousel.Item>
          <Page6Card
            img={Card6Img1}
            about="Slate helps you see how many more days you need to work to reach your financial goal for the month and year."
            name="Regina Miles"
            designation="Designer"
          />
        </Carousel.Item>

        <Carousel.Item>
          <Page6Card
            img={Card6Img2}
            about="Slate helps you see how many more days you need to work to reach your financial goal for the month and year."
            name="Regina Miles"
            designation="Designer"
          />
        </Carousel.Item>
      </Carousel> */}

      <Carousel>
        {Page6Object.map(CreateEntryPage6, { isMobile: true })}
      </Carousel>
      {/* <Carousel>{CreateEntryPage6(Page6Object[0], true)}</Carousel> */}
    </div>
  ) : //   {
  //   for(int i = 0 ; i+1 < arr.length ; i+=2){

  //     <Carousel.Item>
  //     <Page6Card
  //       key={arr[i].id}
  //       img={ObjData.Img}
  //       review={ObjData.Review}
  //       name={ObjData.Name}
  //       designation={ObjData.Occupation}
  //     />
  //     </Carousel.Item>

  // <Carousel.Item>
  //     <Page6Card
  //       key={arr[i+1].id}
  //       img={ObjData.Img}
  //       review={ObjData.Review}
  //       name={ObjData.Name}
  //       designation={ObjData.Occupation}
  //     />
  //   </Carousel.Item>
  //     }
  //   }

  mediaQueries.tablet ? (
    <div className="Page6RowMainContainer">
      {/* <Carousel>
        <Carousel.Item>
          <Page6Card
            img={Card6Img1}
            about="Slate helps you see how many more days you need to work to reach your financial goal for the month and year."
            name="Regina Miles"
            designation="Designer"
          />
        </Carousel.Item>

        <Carousel.Item>
          <Page6Card
            img={Card6Img2}
            about="Slate helps you see how many more days you need to work to reach your financial goal for the month and year."
            name="Regina Miles"
            designation="Designer"
          />
        </Carousel.Item>
      </Carousel> */}
      <Carousel>
        {Page6Object.map(CreateEntryPage6, { isTablet: true })}
      </Carousel>
    </div>
  ) : (
    <div className="Page6RowMainContainer">
      {/* <Page6Card
          img={Card6Img1}
          about="Slate helps you see how many more days you need to work to reach your financial goal for the month and year."
          name="Regina Miles"
          designation="Designer"
        />

        <Page6Card
          img={Card6Img2}
          about="Slate helps you see how many more days you need to work to reach your financial goal for the month and year."
          name="Regina Miles"
          designation="Designer"
        /> */}

      {/* {Page6Object.map(CreateEntryPage6, false)} */}
      {Page6Object.map(
        CreateEntryPage6,
        { isMobile: false },
        { isTablet: false }
      )}
    </div>
  );
}

export default Page6Row;