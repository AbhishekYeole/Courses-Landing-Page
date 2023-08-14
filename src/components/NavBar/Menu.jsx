import React from "react";
import MenuItem from "./MenuItem";
import {  Row, Col } from "react-bootstrap";

function Menu() {
    return (

            <Row className="MenuContainer">
                <Col sm>
                    <MenuItem
                        idName= "homeMenu"
                        name = "Home"
                    />
                </Col>

                <Col sm>
                    <MenuItem
                        name = "Product"
                    />
                </Col>

                <Col sm>
                    <MenuItem
                        name = "Pricing"
                    />
                </Col>

                <Col sm>
                    <MenuItem
                     name = "Contact"
                    />
                </Col>
            </Row>

    );
}

export default Menu;