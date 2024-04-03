import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const NavbarC = () => {

  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="https://res.cloudinary.com/dcsj0kdrc/image/upload/v1712152123/Dise%C3%B1o_sin_t%C3%ADtulo_4_pdifex.png"
              width="350"
              height="200"
              className="d-inline-block align-top me-5"
              alt="Logo de VBB"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav " />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className='fs-1 text-center'>
              <NavLink className='me-4 fuente-titulos nav-link' to="/">Inicio</NavLink>
              <NavLink className='me-4 fuente-titulos nav-link' to="/Hablemos">Hablemos</NavLink>
              <NavLink className='me-4 fuente-titulos nav-link' to="/Faqs">FAQ´s</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarC

