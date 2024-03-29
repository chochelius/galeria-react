import React from "react";
import Navbar from 'react-bootstrap/Navbar';



const FooterComponent = (props) => {
    return (
        <Navbar bg="light" className="mx-auto">
            <Navbar.Brand href="#home">{props.text}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Navbar>

    );
}

export default FooterComponent;