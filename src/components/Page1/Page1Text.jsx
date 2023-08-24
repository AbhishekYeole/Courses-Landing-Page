import React from "react";
import { useNavigate } from "react-router-dom";

function Page1Text() {
  let navigate = useNavigate();
  return (
    <div className="CoverPageTextMainContainer">
      <h5>For Better Future</h5>
      <h1>
        HIGH QUALITY <br /> COURSES
      </h1>
      <h4>
        Find the right instructor for you from <br /> over 10,000 teachers
      </h4>
      <div className="CoverPageTextBtnMainContainer">
        <button
          onClick={() => {
            navigate("/quote");
          }}
          className="GetQuoteNowBtn"
        >
          Get Quote Now
        </button>
        <button className="LearnMoreBtn">Learn More</button>
      </div>
    </div>
  );
}

export default Page1Text;
