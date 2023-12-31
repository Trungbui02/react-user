import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoApp from '../assets/images/logo192.png'
import { useLocation, NavLinks } from 'react-router-dom';
import { NavLink } from 'react-bootstrap';

const Header = (props) => {

  const location = useLocation();
  return (<>

    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logoApp}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          <span> WEB ProMax</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink href="/" className="nav-link" > Home</NavLink>
            <NavLink href="/users" className="nav-link">Manage User</NavLink>
            </Nav>
            <Nav>
            <NavDropdown title="Setting" >
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              <NavDropdown.Item href="/logout">LogOut </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  );
}
export default Header;