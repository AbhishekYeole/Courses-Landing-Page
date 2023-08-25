import React from "react";
import CardFile from "./CardFile";
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
  return <div className="Page2CardRow">{Page2Object.map(CreateEntry)}</div>;
}

export default CoverPage2Part2;
