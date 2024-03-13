import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const NavbarC = () => {

  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: "#F7D9D9" }}>
        <Container className=''>
          <Navbar.Brand href="/">
            <img
              src="https://res.cloudinary.com/dcsj0kdrc/image/upload/v1710254809/logob_i99982.png"
              width="450"
              height="200"
              className="d-inline-block align-top me-5"
              alt="React Bootstrap logo"
            />
            </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav" className='d-flex justify-content-center text-center '>
            <Nav className='fs-1 '>
              <NavLink className='me-4 fuente-titulos nav-link' style={{ color: "#FC000A" }} to="/">Inicio</NavLink>
              <NavLink className='me-4 fuente-titulos nav-link' style={{ color: "#FC000A" }} to="/SobreMi">Quien Soy?</NavLink>
              <NavLink className='me-4 fuente-titulos nav-link' style={{ color: "#FC000A" }} to="/Hablemos">Hablemos</NavLink>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarC

