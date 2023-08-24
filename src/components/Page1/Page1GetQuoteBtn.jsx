import React from "react";
import NewForm from "../Form/NewForm";

function Page1GetQuoteBtn(props) {
  return (
    <>
      <NewForm
        cartObject={props.cartObject}
        addQuantity={props.addQuantity}
        removeQuantity={props.removeQuantity}
      />
    </>
  );
}

export default Page1GetQuoteBtn;
