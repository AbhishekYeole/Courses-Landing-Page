import React, { useContext } from "react";
import "../../CSS/Cart.css";
import NavBar from "./NavBar";
import MainFooterPart2 from "../FooterPart2/MainFooterPart2";
import CartCard from "./CartCard";
import Page3Object from "../../Objects/Page3Object";
import noteContext from "../../context/noteContext";

function CartComponent(props) {
  const a = useContext(noteContext);
  function CreateCartCard(objData) {
    if (a.cartObject.get(objData.id) !== 0) {
      return (
        <CartCard
          id={objData.id}
          Img={objData.Img}
          Heading={objData.ProductName}
          Discription={objData.ProductInfo}
          Price={objData.HighlitedPrice}
          Quntity={a.cartObject.get(objData.id)}
        />
      );
    }
  }

  function getTotalItems() {
    let sum = 0;

    a.cartObject &&
      a.cartObject.forEach((value) => {
        sum += value;
      });
    console.log("sum  = " + sum);
    return sum;
  }

  function getTotalPrice() {
    let sum = 0;
    Page3Object.forEach((obj) => {
      if (a.cartObject.get(obj.id) !== 0) {
        console.log(Number(obj.HighlitedPrice.substring(1)));
        sum +=
          Number(obj.HighlitedPrice.substring(1)) * a.cartObject.get(obj.id);
      }
    });
    console.log("sum  = " + sum);
    return sum.toFixed(2);
  }

  return (
    <>
      <NavBar />
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
