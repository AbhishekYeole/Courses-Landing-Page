import React from "react";

import "../../CSS/Form.css";
import { Col, Container, Image } from "react-bootstrap";
import FacebookLogo from "../FooterPart2/FacebookLogo.svg";
import InstagramLogo from "../FooterPart2/InstagramLogo.svg";
import TwitterLogo from "../FooterPart2/TwitterLogo.svg";
import QuoteForm from "./QuoteForm";
import NavBar from "../NavBar/NavBar";
import MainFooterPart2 from "../FooterPart2/MainFooterPart2";
import FooterPhone from "../Footer/FooterPhone.svg";
import FooterMap from "../Footer/FooterMap.svg";
import FooterMessage from "../Footer/FooterMessage.svg";

function NewForm(props) {
  return (
    <>
      <NavBar
        cartObject={props.cartObject}
        addQuantity={props.addQuantity}
        removeQuantity={props.removeQuantity}
      />

      <Container className="QuoteFormOuterBox fluid ">
        <Container className="QuoteFormInnerBox">
          <Col md={4} xs={6} className="QuoteFormCol1">
            <h2 className="QuoteFormCol1H2">Get In Touch</h2>

            <div className="FormFooterOuterBox">
              <div className="FormFooterInnerBox">
                <div className="FormFooterCardRow">
                  <Image id="phoneIconImg" src={FooterPhone} alt="phone icon" />
                  <h6 className="FooterLastCardRowH6">(480) 555-0103</h6>
                </div>

                <div className="FormFooterCardRow">
                  <Image id="mapIconImg" src={FooterMap} alt="phone icon" />
                  <h6 className="FooterLastCardRowH6">
                    4517 Washington Ave. Manchester, Kentucky 39495
                  </h6>
                </div>

                <div className="FormFooterCardRow">
                  <Image
                    id="messageIconImg"
                    src={FooterMessage}
                    alt="phone icon"
                  />
                  <h6 className="FooterLastCardRowH6">
                    debra.holt@example.com
                  </h6>
                </div>
              </div>
            </div>

            {/* <div className="QuoteFormSocialMediaIcon">
              <img src={FacebookLogo} alt="" />
              <img src={InstagramLogo} alt="" />
              <img src={TwitterLogo} alt="" />
            </div> */}
          </Col>
          <Col md={8} xs={12} className="QuoteFormCol2">
            <h1 className="QuoteFormCol2H1">Get Quote Now</h1>

            <QuoteForm />
          </Col>
        </Container>
      </Container>

      <MainFooterPart2 />
    </>
  );
}

export default NewForm;
