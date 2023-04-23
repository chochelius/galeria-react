import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';



const HeaderComponent = (props) => {
    return (
        <Navbar bg="light" expand="lg" className="mx-auto">
            <Navbar.Brand href="#home">Header</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Ver Mas" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Accion</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Otra acción</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Algo</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Link Separado</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default HeaderComponent;
