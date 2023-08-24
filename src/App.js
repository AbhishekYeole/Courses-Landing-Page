import './App.css';
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import MainComponent from "./components/Main";
import Page3Object from "./Objects/Page3Object";
import Page1GetQuoteBtn from "./components/Page1/Page1GetQuoteBtn";
import CartComponent from "./components/NavBar/Cart";

function App() {
  const [cartObject, setCartObject] = useState(
    new Map(Page3Object.map((obj) => [obj.id, obj.cartQuantity]))
  );
  console.log(cartObject);

  function addQuantity(id) {
    console.log("add");

    const updatedMap = new Map(cartObject.set(id, cartObject.get(id) + 1));

    setCartObject(updatedMap);
  }

  function removeQuantity(id) {
    console.log("remove");

    const updatedMap = new Map(cartObject.set(id, cartObject.get(id) - 1));

    setCartObject(updatedMap);
  }

  return (
    <div className="App">
      {/* <NavBar />
      <MainPage1 />
      <MainPage2 />
      <MainPage3 />
      <MainPage4 />
      <MainPage5 />
      <MainPage6 />
      <MainPage7 />
      <FooterPage />
      <MainFooterPart2 />
      <QuoteForm /> */}
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
