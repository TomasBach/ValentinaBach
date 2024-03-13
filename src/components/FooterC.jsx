import { Container, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router-dom';

const FooterC = () => {
  return (
    <>
      <Container fluid style={{ backgroundColor: "#F7D9D9" }} className="fs-4 text-center p-5">
        <Row>
          <Col style={{ color: "#FC000A" }} className="fuente-titulos">Valentina Bach Bejar</Col>
        </Row>
        <Row >
          <Col className="d-flex justify-content-center">
            <NavLink to="https://www.instagram.com/by.vbb?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="m-3"><FontAwesomeIcon icon={faInstagram} size="2xl" style={{ color: "#FC000A", }} /></NavLink>
            <NavLink to="https://www.linkedin.com/in/valentina-bach-bejar-259735140?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BGKgo4AHwRvabttOnfxl9YQ%3D%3D" target="_blank" className="m-3"><FontAwesomeIcon icon={faLinkedin} size="2xl" style={{ color: "#FC000A", }} /></NavLink>
            <NavLink to="https://wa.me/+34602137434" target="_blank" className="m-3"><FontAwesomeIcon icon={faWhatsapp} size="2xl" style={{ color: "#FC000A", }} /></NavLink>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default FooterC