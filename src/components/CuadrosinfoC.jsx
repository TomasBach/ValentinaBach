import { Container, Row, Col } from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel';
import ImgC from "./ImgC";
import Button from 'react-bootstrap/Button';
import "../css/cuadrosinfo.css"
import { Link, NavLink } from 'react-router-dom';

const CuadrosinfoC = () => {


    return (
        <>
            <Container fluid className="p-3"  style={{ backgroundColor: "#F7D9D9" }}>
                <Row className="mt-3">
                    <Col md={12} lg={4}>
                        <Carousel fade controls={false} indicators={false} className="carruselPrincipal " >
                            <Carousel.Item interval={650} >
                                <ImgC urlImage={"https://res.cloudinary.com/dcsj0kdrc/image/upload/v1710289299/TOMAS/Fichas%20tecnicas/FICHA14_vvaa9w.jpg"} height={400} />
                            </Carousel.Item>
                            <Carousel.Item interval={750} >
                                <ImgC urlImage={"https://res.cloudinary.com/dcsj0kdrc/image/upload/v1710289290/TOMAS/Fichas%20tecnicas/FICHA_q309xk.jpg"} height={400} />
                            </Carousel.Item>
                            <Carousel.Item interval={900} >
                                <ImgC urlImage={"https://res.cloudinary.com/dcsj0kdrc/image/upload/v1710289296/TOMAS/Fichas%20tecnicas/FICHAS2_ppsuhe.jpg"} height={400} />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col md={12} lg={8} className=" text-center d-flex justify-content-center align-items-center fs-4  p-2">
                        <Container>
                            <Row>
                                <Col >
                                    <h2 className="fuente-titulos fs-1" style={{ color: "#FC000A" }}>Fichas Tecnicas</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aliquid officia quasi sed non nisi optio fuga voluptatibus, error consequatur unde earum libero ex voluptates. Ratione quo optio beatae dolores!</p>
                                    <Link className='me-4 fuente-titulos btn btn-outline-dark fs-5'  to="/FichasTecnicas">Conocer mas</Link>
                                    </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>

                <Row className="my-3 cambio-direccion">
                    <Col md={12} lg={8} className=" text-center d-flex justify-content-center align-items-center fs-4 mb-1">
                        <Container>
                            <Row>
                                <Col>
                                    <h2 className="fuente-titulos fs-1" style={{ color: "#FC000A" }}>Diseño de Estampas</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aliquid officia quasi sed non nisi optio fuga voluptatibus, error consequatur unde earum libero ex voluptates. Ratione quo optio beatae dolores!</p>
                                    <NavLink className='me-4 fuente-titulos  btn btn-outline-dark fs-5' to="/DisenoEstampas">Conocer mas</NavLink></Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col lg={4} >
                        <Carousel fade controls={false} indicators={false} className="carruselPrincipal ">
                            <Carousel.Item interval={850}>
                                <ImgC urlImage={"https://res.cloudinary.com/dcsj0kdrc/image/upload/v1710289288/TOMAS/estampas/hoodie_RESISTANCE_r5hu4b.jpg"} height={400} />
                            </Carousel.Item>
                            <Carousel.Item interval={800}>
                                <ImgC urlImage={"https://res.cloudinary.com/dcsj0kdrc/image/upload/v1710289288/TOMAS/estampas/COURAGE_l3nopv.jpg"} height={400} />
                            </Carousel.Item>
                            <Carousel.Item interval={650}>
                                <ImgC urlImage={"https://res.cloudinary.com/dcsj0kdrc/image/upload/v1710289287/TOMAS/estampas/BEPART_e9xcl3.jpg"} height={400} />
                            </Carousel.Item>
                        </Carousel>
                    </Col>

                </Row>

                <Row className="mb-3">
                    <Col md={12} lg={4}>
                        <Carousel fade controls={false} indicators={false} className="carruselPrincipal ">
                            <Carousel.Item interval={850} >
                                <ImgC urlImage={"https://res.cloudinary.com/dcsj0kdrc/image/upload/v1710289301/TOMAS/fIGURINES/figurines2_dqhpap.jpg"} height={400} />
                            </Carousel.Item>
                            <Carousel.Item interval={600}>
                                <ImgC urlImage={"https://res.cloudinary.com/dcsj0kdrc/image/upload/v1710289300/TOMAS/fIGURINES/figurines3_divx8b.jpg"} height={400} />
                            </Carousel.Item>
                            <Carousel.Item interval={750}>
                                <ImgC urlImage={"https://res.cloudinary.com/dcsj0kdrc/image/upload/v1710289298/TOMAS/fIGURINES/figurines9_k5tn3m.jpg"} height={400} />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col md={12} lg={8} className=" text-center d-flex justify-content-center align-items-center fs-4">
                        <Container>
                            <Row>
                                <Col>
                                    <h2 className="fuente-titulos fs-1" style={{ color: "#FC000A" }}>Figurines Moda</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aliquid officia quasi sed non nisi optio fuga voluptatibus, error consequatur unde earum libero ex voluptates. Ratione quo optio beatae dolores!</p>
                                    <NavLink className='me-4 fuente-titulos  btn btn-outline-dark fs-5' to="/FigurinesModa">Conocer mas</NavLink></Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default CuadrosinfoC