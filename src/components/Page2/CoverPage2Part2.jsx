import React from "react";
import CardFile from "./CardFile";
// import blackboards from "./Sourses/blackboards.svg";
// import telescope from "./Sourses/telescope.svg";
// import CapTop from "./Sourses/CapTop.svg";
// import Bag from "./Sourses/Bag.svg";
import Page2Object from "../../Objects/Page2Object";

function CreateEntry(ObjData) {
  return (
    <div
      className={
        parseInt(ObjData.id) % 2 === 1 ? "CardFile CardFile1 " : "CardFile"
      }
    >
      <CardFile
        key={ObjData.id}
        Img={ObjData.img}
        Head={ObjData.heading}
        Para={ObjData.paragraph}
      />
    </div>
  );
}

function CoverPage2Part2() {
  return (
    // <div className="Page2CardRow">
    //   <div className="CardFile CardFile1">
    //     <CardFile
    //       FirstHeading="Certified Teachers"
    //       Link={blackboards}
    //       colId="BlackboardsDiv"
    //     />
    //   </div>

    //   <div className="CardFile">
    //     <CardFile
    //       FirstHeading="Training Courses"
    //       Link={telescope}
    //       colId="TelescopeDiv"
    //     />
    //   </div>

    //   <div className="CardFile CardFile3">
    //     <CardFile
    //       FirstHeading="Training Courses"
    //       Link={CapTop}
    //       colId="CapDiv"
    //       mainDiv="CardMainDiv3"
    //       paragraphId="Page3Card3Paragraph"
    //     />
    //   </div>

    //   <div className="CardFile">
    //     <CardFile FirstHeading="Lifetime Access" Link={Bag} colId="BagDiv" />
    //   </div>
    // </div>

    <div className="Page2CardRow">{Page2Object.map(CreateEntry)}</div>
  );
}

export default CoverPage2Part2;
