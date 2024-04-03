import { Container, Row, Col } from "react-bootstrap"
import ImgC from "./ImgC";
import "../css/cuadrosinfo.css"
import { Link, NavLink } from 'react-router-dom';

const CuadrosinfoC = () => {


    return (
        <>
            <Container fluid className="p-5 ">
                <Row className="my-5 ">
                    <Col sm={12} lg={5} className="carruselPrincipal">
                        <ImgC urlImage={"https://res.cloudinary.com/dcsj0kdrc/image/upload/v1710976375/u1_pybhcq.png"} height={600} />
                    </Col>
                    <Col sm={12} lg={7} className=" text-center d-flex align-items-center fs-4 ">
                        <Container>
                            <Row>
                                <Col >
                                    <div className="mx-auto w-75">
                                        <p>Con nuestras fichas técnicas, tendrás acceso a detalles precisos sobre diseños, medidas, materiales y técnicas de confección de tus prendas.
                                            Simplifica tu proceso creativo y eleva la calidad de tu producción con nuestras completas fichas técnicas personalizadas…
                                        </p>
                                    </div>
                                    <Link className='me-4 btn fs-5' style={{ backgroundColor: "#F7D9D9" }} to="/FichasTecnicas">VER MAS</Link>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>

                <Row className="my-5 cambio-direccion ">
                    <Col sm={12} lg={7} className=" text-center d-flex align-items-center fs-4 mb-1">
                        <Container>
                            <Row>
                                <Col>
                                    <div className="mx-auto w-75">
                                        <p>Desde estampas vibrantes hasta logos elegantes, cada diseño es creado exclusivamente para ti, reflejando tu identidad y dejando una impresión duradera.
                                            Charlemos un poco y déjanos inspirarnos en tus ideas para co-crear prints únicos y originales…
                                        </p>
                                    </div>
                                    <NavLink className='me-4 btn fs-5 ' style={{ backgroundColor: "#F7D9D9" }} to="/DisenoEstampas">VER MAS</NavLink></Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col sm={12} lg={5} className="carruselPrincipal">
                        <ImgC urlImage={"https://res.cloudinary.com/dcsj0kdrc/image/upload/v1710976370/uu1_tnspbq.png"} height={600} />
                    </Col>

                </Row>

                <Row className="my-5 ">
                    <Col sm={12} lg={5} className="carruselPrincipal">
                        <ImgC urlImage={"https://res.cloudinary.com/dcsj0kdrc/image/upload/v1710976373/Untitled-2_vsbwql.png"} height={600} />
                    </Col>
                    <Col sm={12} lg={7} className=" text-center d-flex justify-content-center align-items-center fs-4">
                        <Container>
                            <Row>
                                <Col>
                                    <div className="mx-auto w-75">
                                        <p >Con una amplia variedad de estilos y técnicas, nuestros figurines son la herramienta perfecta para diseñadores, ilustradores y amantes de la moda.
                                            Ya sea que prefieras la versatilidad de lo digital o el encanto de lo hecho a mano, nuestros figurines capturan la esencia de tus ideas en cada trazo…
                                        </p>
                                    </div>
                                    <NavLink className='me-4 btn fs-5' style={{ backgroundColor: "#F7D9D9" }} to="/FigurinesModa">VER MAS</NavLink></Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default CuadrosinfoC