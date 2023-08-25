import React from "react";
import "../../CSS/Cart.css";
import NavBar from "./NavBar";
import MainFooterPart2 from "../FooterPart2/MainFooterPart2";
import CartCard from "./CartCard";
import Page3Object from "../../Objects/Page3Object";

function CartComponent(props) {
  function CreateCartCard(objData) {
    if (props.cartObject.get(objData.id) !== 0) {
      return (
        <CartCard
          id={objData.id}
          Img={objData.Img}
          Heading={objData.ProductName}
          Discription={objData.ProductInfo}
          Price={objData.HighlitedPrice}
          Quntity={props.cartObject.get(objData.id)}
          cartObject={props.cartObject}
          addQuantity={props.addQuantity}
          removeQuantity={props.removeQuantity}
          deleteProduct={props.deleteProduct}
        />
      );
    }
  }

  function getTotalItems() {
    let sum = 0;

    props.cartObject &&
      props.cartObject.forEach((value) => {
        sum += value;
      });
    console.log("sum  = " + sum);
    return sum;
  }

  function getTotalPrice() {
    let sum = 0;
    Page3Object.forEach((obj) => {
      if (props.cartObject.get(obj.id) !== 0) {
        console.log(Number(obj.HighlitedPrice.substring(1)));
        sum +=
          Number(obj.HighlitedPrice.substring(1)) *
          props.cartObject.get(obj.id);
      }
    });
    console.log("sum  = " + sum);
    return sum.toFixed(2);
  }

  return (
    <>
      <NavBar
        cartObject={props.cartObject}
        addQuantity={props.addQuantity}
        removeQuantity={props.removeQuantity}
      />
      <div className="CartOuterBox">
        <div className="CartInnerBox">
          {Page3Object.map(CreateCartCard)}
          <p id="CartCardTotalItemBox">Total Items : ( {getTotalItems()} )</p>
          <p id="CartCardTotalItemBox">Total Price : ($ {getTotalPrice()} )</p>
        </div>
      </div>

      <MainFooterPart2 />
    </>
  );
}

export default CartComponent;
