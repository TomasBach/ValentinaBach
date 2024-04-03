import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ImgC from '../components/ImgC'

const SobreMi = () => {

    return (
        <>

            <Container fluid className='text-center fs-5 fondo-sobremi'>
                <Row className="my-5 ">
                    <Col sm={12} md={7} className=" text-center d-flex align-items-center fs-4 ">
                        <Container>
                            <Row>
                                <Col className='p-2'>
                                    <h2 className="fuente-titulos fs-1" style={{ color: "#D10F17" }}>¡Bienvenid@s!</h2>
                                    <div className="mx-auto w-75">
                                        <p> Mi nombre es Valentina, soy diseñadora textil y de indumentaria especializada en diseño gráfico de moda, y una apasionada del arte y la creatividad.
                                            En este espacio, encontrarás los servicios que ofrecemos como equipo de freelancers, buscando ayudar y dar soporte a marcas, estudiantes, creativos y diseñadores para potenciar sus proyectos, elevar la calidad de sus productos y ampliar su espectro creativo.
                                            He creado un recurso invaluable para diseñadores, estudiantes y entusiastas de la moda que, a veces, por falta de tiempo, conocimientos o simplemente por practicidad, necesitan una mano a la hora de ilustrar figurines o prendas; diseñar estampas y logos; o realizar fichas técnicas de excelente calidad.
                                            Si te sientes identificado con algo de todo esto, ¡estás en el lugar correcto!
                                            ¡Bienvenid@!
                                        </p>
                                    </div>
                                   
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col sm={12} md={3} className="carruselPrincipal ImagenSobreMi">
                        <ImgC urlImage={"https://res.cloudinary.com/dcsj0kdrc/image/upload/v1710976543/historias_de_insta_j0wdck.png"} height={600} />
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default SobreMi

