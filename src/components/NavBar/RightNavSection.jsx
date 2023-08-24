import React, { useState } from "react";
import ButtonSection from "../../Resources/ButtonSection";
import { Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function RightNavSection(props) {
  let navigate = useNavigate();

  function totalQuantity() {
    let sum = 0;

    props.cartObject &&
      props.cartObject.forEach((value) => {
        sum += value;
      });
    console.log("sum  = " + sum);
    return sum;
  }

  return (
    <div className="RightNavSectionContainer">
      <Badge size="default" count={totalQuantity()}>
        <ShoppingCartOutlined
          onClick={() => {
            console.log("cart Clickeddd");
            navigate("/cart");
          }}
        />
      </Badge>

      <ButtonSection btnName="Login" class="NavLastBtn" Id="NavLastBtnLogin" />

      <ButtonSection
        btnName="Join US"
        class="NavLastBtn"
        // btnImg={NavArrowRight}
        ImgId="JoinUsBtn"
      />
    </div>
  );
}

export { RightNavSection };
