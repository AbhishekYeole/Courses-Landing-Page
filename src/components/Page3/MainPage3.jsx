import React from "react";
import Page3Text from "./Page3Text";
import Page3CardComponent from "./Page3CardComponent";

function MainPage3(props) {
  return (
    <div className="CoverPage3OuterBox">
      <div className="CoverPage3InnerBox">
        <Page3Text />

        <Page3CardComponent
          cartObject={props.cartObject}
          addQuantity={props.addQuantity}
          removeQuantity={props.removeQuantity}
        />
      </div>
    </div>
  );
}

export default MainPage3;
