import React, { useState } from "react";
import noteContext from "./noteContext";
import Page3Object from "../Objects/Page3Object";

const NoteState = (props) => {
  const cartMap =
    localStorage.getItem("cartObject") !== null
      ? getCartObjectFromStroge()
      : Page3Object.map((obj) => [obj.id, obj.cartQuantity]);

  const [cartObject, setCartObject] = useState(new Map(cartMap));

  function storeCartObject() {
    const json = JSON.stringify(Object.fromEntries(cartObject));

    localStorage.setItem("cartObject", json);
  }

  function getCartObjectFromStroge() {
    const json = localStorage.getItem("cartObject");
    return new Map(Object.entries(JSON.parse(json)));
  }

  function addQuantity(id) {
    console.log("add");

    const updatedMap = new Map(cartObject.set(id, cartObject.get(id) + 1));

    setCartObject(updatedMap);

    storeCartObject();
  }

  function removeQuantity(id) {
    console.log("remove");

    const updatedMap = new Map(cartObject.set(id, cartObject.get(id) - 1));

    setCartObject(updatedMap);
    storeCartObject();
  }

  function deleteProduct(id) {
    const updatedMap = new Map(cartObject.set(id, 0));

    setCartObject(updatedMap);
    storeCartObject();
  }

  return (
    <noteContext.Provider
      value={{
        cartMap,
        cartObject,
        storeCartObject,
        getCartObjectFromStroge,
        addQuantity,
        removeQuantity,
        deleteProduct,
        setCartObject,
      }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
