import React from "react";
import BrandLogo from "./BrandLogo";
import Menu from "./Menu";
import RightNavSection from "./RightNavSection";
import { Col, Container, Row } from "react-bootstrap";

function NavBar() {
    return (
        <Container fluid id="MainNavBarContainer">
            <Container id="NavBarContainer">
                <Row >
                    <Col sm={3} className="NavBrandLogoCol" > <BrandLogo /> </Col>
                    <Col className="NavMenuCol" > <Menu /> </Col>
                    <Col className="NavBtnCol" > <RightNavSection /> </Col>
                </Row>
            </Container>
        </Container>
    );
} 

export default NavBar;