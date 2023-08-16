import React from "react";
import BrandLogo from "./BrandLogo";
import Menu from "./Menu";
import RightNavSection from "./RightNavSection";
import { Col, Container, Row } from "react-bootstrap";
import { Nav, Navbar } from "react-bootstrap";
import useMediaQueries from "media-queries-in-react";

function NavBar() {
  const mediaQueries = useMediaQueries({
    mobile: "screen and (max-width: 480px)",
  });

  return mediaQueries.mobile ? (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand href="#home">BrandName</Navbar.Brand>
      <Col className="NavBtnCol">
        <RightNavSection />
      </Col>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Home</Nav.Link>
          <Nav.Link href="#pricing">Product</Nav.Link>
          <Nav.Link href="#features">Pricing</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
          {/* <Col className="NavBtnCol">
              <RightNavSection />
            </Col> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  ) : (
    <Container fluid id="MainNavBarContainer">
      <Container id="NavBarContainer">
        <Row>
          <Col sm={3} className="NavBrandLogoCol">
            {" "}
            <BrandLogo />{" "}
          </Col>
          <Col className="NavMenuCol">
            {" "}
            <Menu />{" "}
          </Col>
          <Col className="NavBtnCol">
            {" "}
            <RightNavSection />{" "}
          </Col>
        </Row>
      </Container>
    </Container>
  );
} 

export default NavBar;