import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Gallery from '../pages/gallery';
import Link from 'next/link';
import { useState } from 'react';


function ResponsiveNavBar() {

  const [navState, setNavState] = useState(false);
  return (
    <Navbar bg="dark" variant="dark" expand="md" expanded={navState} onToggle={() => setNavState(!navState)}
    fixed='top'
    style={{borderBottom: '2px solid aliceblue'}}>
      <Container >
        <Navbar.Brand href="/">The Little Mountain House</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Link href="/" className="nav-link" onClick={() => setNavState(false)}>Home</Link>
            <Link href="/gallery" className="nav-link" onClick={() => setNavState(false)}>Gallery</Link>
            <Link href="/contact" className="nav-link" onClick={() => setNavState(false)}>Contact</Link>
            <Link href="/about" className="nav-link" onClick={() => setNavState(false)}>About</Link>
            {/* <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="/about">Who we are?</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Facilities
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Activities and Places to Visit
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ResponsiveNavBar;