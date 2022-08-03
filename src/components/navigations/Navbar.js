import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { SiEpicgames } from "react-icons/si"
import { Link } from "react-router-dom";


function NavbarCom() {
  return (
    <Navbar bg="light" expand="lg" >
      <Container fluid >
      <Navbar.Brand href="#home"><SiEpicgames/>ReactGames</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           <Link className="nav-link active" to="/">Home</Link>
           <Link className="nav-link"to="/games">Games</Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCom;