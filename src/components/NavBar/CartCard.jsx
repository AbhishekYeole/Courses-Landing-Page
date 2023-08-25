import "../../CSS/Cart.css";
import { Image, Table } from "react-bootstrap";
import CartDeleteIcon from "./CartDeleteIcon.png";

function CartCard(props) {
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
                    props.removeQuantity(props.id);
                  }}
                >
                  -
                </button>
                <p>{props.Quntity}</p>
                <button
                  className="CartCardQuantityBtn"
                  onClick={() => {
                    props.addQuantity(props.id);
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
                    props.deleteProduct(props.id);
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
