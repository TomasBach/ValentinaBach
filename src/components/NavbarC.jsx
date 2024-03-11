import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavbarC = () => {

  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: "#D10F17" }}>
        <Container className=''>
          <Navbar.Brand href="/">
            <img
              src="https://res.cloudinary.com/dcsj0kdrc/image/upload/v1709836694/Captura_de_pantalla_2024-03-07_153541_ctz3kl.png"
              width="150"
              height="150"
              className="d-inline-block align-top me-5"
              alt="React Bootstrap logo"
            /></Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav" className='d-flex justify-content-center text-center '>
            <Nav className='fs-1 '>
              <Nav.Link className='me-4 fuente-titulos' style={{ color: "#F7D9D9" }} href="/">Inicio</Nav.Link>
              <Nav.Link className='me-4 fuente-titulos' style={{ color: "#F7D9D9" }} href="/SobreMi">Quien Soy?</Nav.Link>
              <Nav.Link className='me-4 fuente-titulos' style={{ color: "#F7D9D9" }} href="/Hablemos">Hablemos</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarC

