import React from "react";
import "../App.css";
import "../CSS/NavBar.css";
import "../CSS/Page1.css";
import "../CSS/Page2.css";
import "../CSS/Page3.css";
import "../CSS/Page4.css";
import "../CSS/Page5.css";
import "../CSS/Page6.css";
import "../CSS/Page7.css";
import "../CSS/Footer.css";
import "../CSS/Form.css";
import "../CSS/FooterPart2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar/NavBar";
import MainPage1 from "./Page1/MainPage1";
import MainPage2 from "./Page2/MainPage2";
import MainPage3 from "./Page3/MainPage3";
import MainPage4 from "./Page4/MainPage4";
import MainPage5 from "./Page5/MainPage5";
import MainPage6 from "./Page6/MainPage6";
import MainPage7 from "./Page7/MainPage7";
import FooterPage from "./Footer/FooterPage";
import MainFooterPart2 from "./FooterPart2/MainFooterPart2";

function MainComponent() {
  return (
    <div className="MainBodyDiv">
      <NavBar />
      <MainPage1 />
      <MainPage2 />
      <MainPage3 />
      <MainPage4 />
      <MainPage5 />
      <MainPage6 />
      <MainPage7 />
      <FooterPage />
      <MainFooterPart2 />
    </div>
  );
}

export default MainComponent;
