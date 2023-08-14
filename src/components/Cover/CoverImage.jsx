import React from "react";
import { Container } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import CoverImg1 from './CoverImg1.png';
import CoverImg2 from './CoverImg2.png';

function CoverImage() {
    return (
        <Container id="CoverImgContainer">

            <div className="CoverImgBox">
                <Image src={CoverImg1} alt="img" id="Coverimg1" />
                <Image src={CoverImg2} alt="img" id="Coverimg2" />
            </div>
            
        </Container>
    );
}


// import React from 'react';
// import logo from './logo.png'; // Tell Webpack this JS file uses this image

// console.log(logo); // /logo.84287d09.png

// function Header() {
//   // Import result is the URL of your image
//   return <img src={logo} alt="Logo" />;
// }

// export default Header;

export default CoverImage;