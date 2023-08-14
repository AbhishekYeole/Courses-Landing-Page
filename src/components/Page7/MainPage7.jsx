import React from "react";
import { InputGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";


function MainPage7() {
    return (

        <div className="Page7OuterBox">
            
            <div className="MainPage7Div">
                
                <div className="MainPage7Text">

                    <h6 className="MainPage7TextH6">Newsletter</h6>

                    <h3 className="MainPage7TextH3">Every Client Matters</h3>

                    <p className="MainPage7TextParagraph">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>

                </div>
                
                <InputGroup className="Page7Form">
                    <Form.Control id="Forminputbox"
                        placeholder="Your Email"
                    />
                    <Button id="button-addon2">
                        Subscribe
                    </Button>
                </InputGroup>

            </div>
    
        </div>
    );
}

export default MainPage7;