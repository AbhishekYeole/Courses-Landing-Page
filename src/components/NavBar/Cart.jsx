import React from "react";
import "/Users/abhishek/Daily Practice/Project_Practice/Courses-Website/src/CSS/Cart.css";
import NavBar from "./NavBar";
import MainFooterPart2 from "../FooterPart2/MainFooterPart2";
import { Image, Table } from "react-bootstrap";
import Row2Col1Img from "../Page3/SourcesPage3/Row2Col1Img.png";
import CartDeleteIcon from "./CartDeleteIcon.png";
import { useState } from "react";
import Page3Object from "../../Objects/Page3Object";

function CartComponent(props) {
  const [display, setDisplay] = useState(
    new Map(Page3Object.map((obj) => [obj.id, obj.cartQuantity]))
  );
  console.log(display);

  function CartCard(id) {
    // const updatedMap = new Map(cartObject.set(id, cartObject.get(id) + 1));
    const Cart = new Map(display.set(id, display.get(id)));
  }
  return (
    <>
      <NavBar
        cartObject={props.cartObject}
        addQuantity={props.addQuantity}
        removeQuantity={props.removeQuantity}
      />

      {/* <div className="CartOuterBox">
        <div className="CartInnerBox">
          <div className="CartCardMainBox">
            <div className="CartImgBox">
              <Image className="CartCardImg" src={Row2Col1Img} />
              <div className="CartCardText">
                <h2 className="CartCardTextH2">Heading</h2>
                <h4 className="CartCardTextH4">Discription</h4>
                <h4 className="CartCardPriceH4">Price</h4>
                <div className="CartCardQuantityBox">
                  <button className="CartCardQuantityBtn">-</button>
                  <p>04</p>
                  <button className="CartCardQuantityBtn">+</button>
                </div>
              </div>
            </div>

            <div className="CartCardBtnBox">
              <button className="CartCardDeleteBtn">
                <Image
                  src={CartDeleteIcon}
                  id="DeleteIcon"
                />
                Remove
              </button>
            </div>
          </div>
        </div>
        <hr />
      </div> */}

      <div className="CartOuterBox">
        <div className="CartInnerBox">
          <Table responsive>
            <tbody>
              <tr>
                <td>
                  <Image className="CartCardImg" src={Row2Col1Img} />
                </td>
                <td>
                  <h2 className="CartCardTextH2">Heading</h2>
                  <h4 className="CartCardTextH4">Discription</h4>
                  <h4 className="CartCardPriceH4">Price</h4>
                  <div className="CartCardQuantityBox">
                    <button
                      className="CartCardQuantityBtn"
                      // onClick={props.removeQuantity()}
                    >
                      -
                    </button>
                    <p>04</p>
                    <button
                      className="CartCardQuantityBtn"
                      // onClick={props.addQuantity()}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>
                  <div className="CartCardBtnBox">
                    <button className="CartCardDeleteBtn">
                      <Image src={CartDeleteIcon} id="DeleteIcon" />
                      Remove
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>

          <Table responsive>
            <tbody>
              <tr>
                <td>
                  <Image className="CartCardImg" src={Row2Col1Img} />
                </td>
                <td>
                  <h2 className="CartCardTextH2">Heading</h2>
                  <h4 className="CartCardTextH4">Discription</h4>
                  <h4 className="CartCardPriceH4">Price</h4>
                  <div className="CartCardQuantityBox">
                    <button className="CartCardQuantityBtn">-</button>
                    <p>04</p>
                    <button className="CartCardQuantityBtn">+</button>
                  </div>
                </td>
                <td>
                  <div className="CartCardBtnBox">
                    <button className="CartCardDeleteBtn">
                      <Image src={CartDeleteIcon} id="DeleteIcon" />
                      Remove
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
          <p id="CartCardTotalItemBox">Total Items ( 01 )</p>
        </div>
      </div>

      <MainFooterPart2 />
    </>
  );
}

export default CartComponent;
