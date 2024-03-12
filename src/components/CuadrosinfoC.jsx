import { Container, Row, Col } from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel';
import ImgC from "./ImgC";
import Button from 'react-bootstrap/Button';
import "../css/cuadrosinfo.css"
import { NavLink } from 'react-router-dom';

const CuadrosinfoC = () => {


    return (
        <>
            <Container fluid className="p-3"  style={{ backgroundColor: "#F7D9D9" }}>
                <Row className="mt-3">
                    <Col md={12} lg={4}>
                        <Carousel fade controls={false} indicators={false} className="carruselPrincipal " >
                            <Carousel.Item interval={650} >
                                <ImgC urlImage={"https://hips.hearstapps.com/hmg-prod/images/gettyimages-695480884-64f8446a4e85d.jpg"} height={400} />
                            </Carousel.Item>
                            <Carousel.Item interval={750} >
                                <ImgC urlImage={"https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg"} height={400} />
                            </Carousel.Item>
                            <Carousel.Item interval={800} >
                                <ImgC urlImage={"https://fotografias.lasexta.com/clipping/cmsimages01/2022/08/09/3FFA8546-05CE-4608-9B69-6602D02A4C58/cachorro-pomsky_103.jpg?crop=1183,887,x0,y0&width=1200&height=900&optimize=low&format=webply"} height={400} />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col md={12} lg={8} className=" text-center d-flex justify-content-center align-items-center fs-4  p-2">
                        <Container>
                            <Row>
                                <Col className="">
                                    <h2>Fichas Tecnicas</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aliquid officia quasi sed non nisi optio fuga voluptatibus, error consequatur unde earum libero ex voluptates. Ratione quo optio beatae dolores!</p>
                                    <NavLink className='me-4 fuente-titulos  btn btn-outline-light fs-5'  to="/FichasTecnicas">Conocer mas</NavLink>
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
                                    <h2>Diseño de Estampas</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aliquid officia quasi sed non nisi optio fuga voluptatibus, error consequatur unde earum libero ex voluptates. Ratione quo optio beatae dolores!</p>
                                    <NavLink className='me-4 fuente-titulos  btn btn-outline-light fs-5' to="/DisenoEstampas">Conocer mas</NavLink></Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col lg={4} >
                        <Carousel fade controls={false} indicators={false} className="carruselPrincipal ">
                            <Carousel.Item interval={700}>
                                <ImgC urlImage={"https://hips.hearstapps.com/hmg-prod/images/gettyimages-695480884-64f8446a4e85d.jpg"} height={400} />
                            </Carousel.Item>
                            <Carousel.Item interval={800}>
                                <ImgC urlImage={"https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg"} height={400} />
                            </Carousel.Item>
                            <Carousel.Item interval={650}>
                                <ImgC urlImage={"https://fotografias.lasexta.com/clipping/cmsimages01/2022/08/09/3FFA8546-05CE-4608-9B69-6602D02A4C58/cachorro-pomsky_103.jpg?crop=1183,887,x0,y0&width=1200&height=900&optimize=low&format=webply"} height={400} />
                            </Carousel.Item>
                        </Carousel>
                    </Col>

                </Row>

                <Row className="mb-3">
                    <Col md={12} lg={4}>
                        <Carousel fade controls={false} indicators={false} className="carruselPrincipal ">
                            <Carousel.Item interval={850} >
                                <ImgC urlImage={"https://hips.hearstapps.com/hmg-prod/images/gettyimages-695480884-64f8446a4e85d.jpg"} height={400} />
                            </Carousel.Item>
                            <Carousel.Item interval={600}>
                                <ImgC urlImage={"https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg"} height={400} />
                            </Carousel.Item>
                            <Carousel.Item interval={750}>
                                <ImgC urlImage={"https://fotografias.lasexta.com/clipping/cmsimages01/2022/08/09/3FFA8546-05CE-4608-9B69-6602D02A4C58/cachorro-pomsky_103.jpg?crop=1183,887,x0,y0&width=1200&height=900&optimize=low&format=webply"} height={400} />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col md={12} lg={8} className=" text-center d-flex justify-content-center align-items-center fs-4">
                        <Container>
                            <Row>
                                <Col>
                                    <h2>Figurines Moda</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aliquid officia quasi sed non nisi optio fuga voluptatibus, error consequatur unde earum libero ex voluptates. Ratione quo optio beatae dolores!</p>
                                    <NavLink className='me-4 fuente-titulos  btn btn-outline-light fs-5' to="/FigurinesModa">Conocer mas</NavLink></Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default CuadrosinfoC