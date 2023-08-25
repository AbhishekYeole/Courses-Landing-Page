import './App.css';
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import MainComponent from "./components/Main";
import Page3Object from "./Objects/Page3Object";
import Page1GetQuoteBtn from "./components/Page1/Page1GetQuoteBtn";
import CartComponent from "./components/NavBar/Cart";

function App() {
  // const [cartObject, setCartObject] = useState(new Map(Page3Object.map((obj) => [obj.id, obj.cartQuantity])));

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
    <div className="App">
      <Router>
        <Routes>
          <Route
            path={"/"}
            element={
              <MainComponent
                cartObject={cartObject}
                addQuantity={addQuantity}
                removeQuantity={removeQuantity}
              />
            }
          />
          <Route
            path={"/cart"}
            element={
              <CartComponent
                cartObject={cartObject}
                addQuantity={addQuantity}
                removeQuantity={removeQuantity}
                deleteProduct={deleteProduct}
              />
            }
          />
          <Route
            path={"/quote"}
            element={
              <Page1GetQuoteBtn
                cartObject={cartObject}
                addQuantity={addQuantity}
                removeQuantity={removeQuantity}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
