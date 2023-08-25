import { RightNavSection } from "./RightNavSection";
import { Col, Container } from "react-bootstrap";
import { Nav, Navbar } from "react-bootstrap";
import useMediaQueries from "media-queries-in-react";

function NavBar(props) {
  const mediaQueries = useMediaQueries({
    mobile: "screen and (max-width: 931px) and ( min-width: 320px )",
  });

  return mediaQueries.mobile ? (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand href="#home">BrandName</Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#pricing">Product</Nav.Link>
          <Nav.Link href="#features">Pricing</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
          <Col className="NavBtnCol">
            <RightNavSection
              cartObject={props.cartObject}
              addQuantity={props.addQuantity}
              removeQuantity={props.removeQuantity}
            />
          </Col>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  ) : (
    <Navbar expand="lg" id="MainNavBarContainer">
      <Container fluid>
        <Navbar.Brand href="#">BrandName</Navbar.Brand>

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Product</Nav.Link>
            <Nav.Link href="#action1">Pricing</Nav.Link>
            <Nav.Link href="#action2">Contact</Nav.Link>
          </Nav>
          <RightNavSection
            cartObject={props.cartObject}
            addQuantity={props.addQuantity}
            removeQuantity={props.removeQuantity}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
