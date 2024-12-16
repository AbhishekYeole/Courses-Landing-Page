import "../../CSS/Cart.css";
import { Image, Table } from "react-bootstrap";
import CartDeleteIcon from "./CartDeleteIcon.png";
import { useContext } from "react";
import noteContext from "../../context/noteContext";

function CartCard(props) {
  const a = useContext(noteContext);
  return (
    <>
      <Table responsive>
        <tbody>
          <tr>
            <td>
              <Image className="CartCardImg" src={props.Img} />
            </td>
            <td>
              <h2 className="CartCardTextH2">{props.Heading}</h2>
              <h4 className="CartCardTextH4">{props.Discription}</h4>
              <h4 className="CartCardPriceH4">{props.Price}</h4>
              <div className="CartCardQuantityBox">
                <button
                  className="CartCardQuantityBtn"
                  onClick={() => {
                    a.removeQuantity(props.id);
                  }}
                >
                  -
                </button>
                <p>{props.Quntity}</p>
                <button
                  className="CartCardQuantityBtn"
                  onClick={() => {
                    a.addQuantity(props.id);
                  }}
                >
                  +
                </button>
              </div>
            </td>
            <td>
              <div className="CartCardBtnBox">
                <button
                  className="CartCardDeleteBtn"
                  onClick={() => {
                    a.deleteProduct(props.id);
                  }}
                >
                  <Image src={CartDeleteIcon} id="DeleteIcon" />
                  Remove
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default CartCard;
