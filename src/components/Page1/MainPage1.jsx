import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Page1Image from "./Page1Image";
import Page1Text from "./Page1Text";

function MainPage1() {
  return (
    <Container fluid id="MainCoverContainer">
      <Row className="CoverMainPageRow">
        <Col className="CoverPageTextCol">
          <Page1Text />
        </Col>

        <Col className="CoverPageImgCol">
          <Page1Image />
        </Col>
      </Row>
    </Container>
  );
}

export default MainPage1;
