import React, { useState } from "react";
import FavoriteIcon from "./SourcesPage3/FavoriteIcon.svg";
import ViewIcon from "./SourcesPage3/ViewIcon.svg";
import Carousel from "react-bootstrap/Carousel";
import useMediaQueries from "media-queries-in-react";
import Page3MainCard from "./Page3MainCard";
import Page3Object from "../../Objects/Page3Object";
import FavoriteLikeIcon from "./SourcesPage3/FavoriteLikeIcon.png";
import BtnAddedIcon from "./SourcesPage3/icons8-add-shopping-cart-80 (1).png";
import BtnAddIcon from "./SourcesPage3/icons8-add-shopping-cart-80.png";

function Page3CardComponent(props) {
  const cartMap =
    localStorage.getItem("favoriteObject") !== null
      ? getCartObjectFromStroge()
      : Page3Object.map((obj) => [obj.id, obj.favoriteObject]);

  const [favoriteObject, setFavoriteObject] = useState(new Map(cartMap));
  // new Map(Page3Object.map((obj) => [obj.id, obj.isFavorite]))

  function storeCartObject() {
    const json = JSON.stringify(Object.fromEntries(favoriteObject));

    localStorage.setItem("favoriteObject", json);
  }

  function getCartObjectFromStroge() {
    const json = localStorage.getItem("favoriteObject");
    return new Map(Object.entries(JSON.parse(json)));
  }

  function favoriteClickHandle(id) {
    const updatedMap = new Map(
      favoriteObject.set(id, favoriteObject.get(id) === true ? false : true)
      // favoriteObject.set(id, favoriteObject.get(id) === false ? true : false)
    );

    setFavoriteObject(updatedMap);
    storeCartObject();
  }

  const mediaQueries = useMediaQueries({
    mobile: "screen and (max-width: 600px)",
    tablet: "screen and (min-width: 601px) and (max-width: 1023px)",
  });

  function CreateEntryPage3(ObjData) {
    return mediaQueries.mobile ? (
      <Carousel.Item>
        <Page3MainCard
          keyId={ObjData.id}
          mainImg={ObjData.Img}
          favoriteClickHandler={favoriteClickHandle}
          btn1Icon={
            favoriteObject.get(ObjData.id) === false
              ? FavoriteIcon
              : FavoriteLikeIcon
          }
          btn2Icon={
            props.cartObject.get(ObjData.id) === 0 ? BtnAddIcon : BtnAddedIcon
          }
          btn3Icon={ViewIcon}
          row1Text={ObjData.ProductName}
          rating={ObjData.Rating}
          row2Text={ObjData.Heading}
          row3Text={ObjData.ProductInfo}
          row4Text={ObjData.SalesCount}
          row5Price1={ObjData.DisabledPrice}
          row5Price2={ObjData.HighlitedPrice}
          cartObject={props.cartObject}
          addQuantity={props.addQuantity}
          removeQuantity={props.removeQuantity}
        />
      </Carousel.Item>
    ) : (
      <Page3MainCard
        keyId={ObjData.id}
        mainImg={ObjData.Img}
        favoriteClickHandler={favoriteClickHandle}
        btn1Icon={
          favoriteObject.get(ObjData.id) === false
            ? FavoriteIcon
            : FavoriteLikeIcon
        }
        btn2Icon={
          props.cartObject.get(ObjData.id) === 0 ? BtnAddIcon : BtnAddedIcon
        }
        btn3Icon={ViewIcon}
        row1Text={ObjData.ProductName}
        rating={ObjData.Rating}
        row2Text={ObjData.Heading}
        row3Text={ObjData.ProductInfo}
        row4Text={ObjData.SalesCount}
        row5Price1={ObjData.DisabledPrice}
        row5Price2={ObjData.HighlitedPrice}
        cartObject={props.cartObject}
        addQuantity={props.addQuantity}
        removeQuantity={props.removeQuantity}
      />
    );
  }

  function CreateTabletCard() {
    let Card = [];

    for (let i = 0; i + 1 < Page3Object.length; i += 2) {
      Card.push(
        <>
          <Page3MainCard
            keyId={Page3Object[i].id}
            mainImg={Page3Object[i].Img}
            favoriteClickHandler={favoriteClickHandle}
            btn1Icon={
              favoriteObject.get(Page3Object[i].id) === false
                ? FavoriteIcon
                : FavoriteLikeIcon
            }
            btn2Icon={
              props.cartObject.get(Page3Object[i].id) === 0
                ? BtnAddIcon
                : BtnAddedIcon
            }
            btn3Icon={ViewIcon}
            row1Text={Page3Object[i].ProductName}
            rating={Page3Object[i].Rating}
            row2Text={Page3Object[i].Heading}
            row3Text={Page3Object[i].ProductInfo}
            row4Text={Page3Object[i].SalesCount}
            row5Price1={Page3Object[i].DisabledPrice}
            row5Price2={Page3Object[i].HighlitedPrice}
            cartObject={props.cartObject}
            addQuantity={props.addQuantity}
            removeQuantity={props.removeQuantity}
          />

          <Page3MainCard
            keyId={Page3Object[i + 1].id}
            mainImg={Page3Object[i + 1].Img}
            favoriteClickHandler={favoriteClickHandle}
            btn1Icon={
              favoriteObject.get(Page3Object[i + 1].id) === false
                ? FavoriteIcon
                : FavoriteLikeIcon
            }
            btn2Icon={
              props.cartObject.get(Page3Object[i + 1].id) === 0
                ? BtnAddIcon
                : BtnAddedIcon
            }
            btn3Icon={ViewIcon}
            row1Text={Page3Object[i + 1].ProductName}
            rating={Page3Object[i + 1].Rating}
            row2Text={Page3Object[i + 1].Heading}
            row3Text={Page3Object[i + 1].ProductInfo}
            row4Text={Page3Object[i + 1].SalesCount}
            row5Price1={Page3Object[i + 1].DisabledPrice}
            row5Price2={Page3Object[i + 1].HighlitedPrice}
            cartObject={props.cartObject}
            addQuantity={props.addQuantity}
            removeQuantity={props.removeQuantity}
          />
        </>
      );
    }

    if (Page3Object.length % 2 === 1) {
      Card.push(
        <>
          <Page3MainCard
            keyId={Page3Object[Page3Object.length - 1].id}
            mainImg={Page3Object[Page3Object.length - 1].Img}
            favoriteClickHandler={favoriteClickHandle}
            btn1Icon={
              favoriteObject.get(Page3Object[Page3Object.length - 1].id) ===
              false
                ? FavoriteIcon
                : FavoriteLikeIcon
            }
            btn2Icon={
              props.cartObject.get(Page3Object[Page3Object.length - 1].id) === 0
                ? BtnAddIcon
                : BtnAddedIcon
            }
            btn3Icon={ViewIcon}
            row1Text={Page3Object[Page3Object.length - 1].ProductName}
            rating={Page3Object[Page3Object.length - 1].Rating}
            row2Text={Page3Object[Page3Object.length - 1].Heading}
            row3Text={Page3Object[Page3Object.length - 1].ProductInfo}
            row4Text={Page3Object[Page3Object.length - 1].SalesCount}
            row5Price1={Page3Object[Page3Object.length - 1].DisabledPrice}
            row5Price2={Page3Object[Page3Object.length - 1].HighlitedPrice}
            cartObject={props.cartObject}
            addQuantity={props.addQuantity}
            removeQuantity={props.removeQuantity}
          />
        </>
      );
    }

    return (
      <Carousel>
        {Card.map((card) => (
          <Carousel.Item>
            <div className="CarasolItemDiv">{card}</div>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }

  return mediaQueries.mobile ? (
    <div className="CoverPage3TextBoxRow2">
      <Carousel>{Page3Object.map(CreateEntryPage3)}</Carousel>
    </div>
  ) : mediaQueries.tablet ? (
    <div className="CoverPage3TextBoxRow2">{CreateTabletCard()}</div>
  ) : (
    <div className="CoverPage3TextBoxRow2">
      {Page3Object.map(CreateEntryPage3)}
    </div>
  );
}

export default Page3CardComponent;
