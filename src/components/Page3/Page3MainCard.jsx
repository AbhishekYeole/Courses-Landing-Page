import { Image } from "react-bootstrap";
import Page3BottomCard from "./Page3BottomCard";

function Page3MainCard(props) {
  return (
    <div className="TextBoxRow2Col">
      <Image className="Row2Col1Img" src={props.mainImg} alt="img" />

      <div className="Row2ColfloatImg">
        <h6>Sale</h6>
      </div>

      <div className="Row2ColFloatBtnBox">
        <button
          className="Row2ColFloatBtn"
          onClick={() => {
            props.favoriteClickHandler(props.keyId);
          }}
        >
          <Image
            className="FloatBtnIcon"
            src={props.btn1Icon}
            alt="favorite icon"
          />
        </button>

        <button
          className="Row2ColFloatBtn"
          onClick={() => {
            if (props.cartObject.get(props.keyId) === 0) {
              props.addQuantity(props.keyId);
            }
          }}
        >
          <Image
            className="FloatBtnIcon"
            src={props.btn2Icon}
            alt="bucket icon"
          />
        </button>

        <button className="Row2ColFloatBtn">
          <Image
            className="FloatBtnIcon"
            src={props.btn3Icon}
            alt="view icon"
          />
        </button>
      </div>

      <Page3BottomCard
        row1Text={props.row1Text}
        rating={props.rating}
        row2Text={props.row2Text}
        row3Text={props.row3Text}
        row4Text={props.row4Text}
        row5Price1={props.row5Price1}
        row5Price2={props.row5Price2}
      />
    </div>
  );
}

export default Page3MainCard;
