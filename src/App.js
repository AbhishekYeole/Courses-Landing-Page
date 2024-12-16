import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import MainComponent from "./components/Main";
import Page1GetQuoteBtn from "./components/Page1/Page1GetQuoteBtn";
import CartComponent from "./components/NavBar/Cart";
import NoteState from "./context/noteState";

function App() {
  return (
    <div className="App">
      <NoteState>
        <Router>
          <Routes>
            <Route path={"/"} element={<MainComponent />} />
            <Route path={"/cart"} element={<CartComponent />} />
            <Route path={"/quote"} element={<Page1GetQuoteBtn />} />
          </Routes>
        </Router>
        {/* <MainFooterPart2 /> */}
      </NoteState>
    </div>
  );
}

export default App;
