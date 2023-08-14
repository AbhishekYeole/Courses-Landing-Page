import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CoverImage from "./CoverImage";
import CoverText from "./CoverText";

function Cover() {
    return (
        <Container fluid id="MainCoverContainer">
            <Row className="CoverMainPageRow">
                <Col className="CoverPageTextCol">
                    <CoverText />
                </Col>

                <Col className="CoverPageImgCol">
                    <CoverImage />
                </Col>
            </Row>
        </Container>
    );
}

export default Cover;