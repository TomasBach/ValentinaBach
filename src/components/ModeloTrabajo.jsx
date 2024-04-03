import React from 'react'
import { Carousel, Container, Row, Col } from 'react-bootstrap'
import ImgC from './ImgC'
import "../css/modelotrabajo.css"
import "../css/cuadrosinfo.css"
import Hablemos from '../pages/Hablemos'
const ModeloTrabajo = ({ Titulo, Descripcion1, Descripcion2, Descripcion3, Descripcion4, Descripcion5, urlImage1, urlImage2, urlImage3, urlImage4, urlImage5, urlImage6, urlImage7, urlImage8, urlImage9, urlImage10 }) => {
    return (
        <>
            <Container fluid className='direccion-trabajo p-3 color-fondo' >
                <h2 className='text-center py-5 fuente-titulos fs-1' style={{ color: "#D10F17" }}>{Titulo}</h2>
                <Container >
                    <Row>

                        <Col sm={12} lg={6}>
                            <Carousel fade controls={false} indicators={false} className="carruselPrincipal " >
                                <Carousel.Item interval={1000} >
                                    <ImgC urlImage={urlImage1} height={400} />
                                </Carousel.Item>
                                <Carousel.Item interval={1000} >
                                    <ImgC urlImage={urlImage2} height={400} />
                                </Carousel.Item>
                                <Carousel.Item interval={1000} >
                                    <ImgC urlImage={urlImage3} height={400} />
                                </Carousel.Item>
                                <Carousel.Item interval={1000} >
                                    <ImgC urlImage={urlImage7} height={400} />
                                </Carousel.Item>
                                <Carousel.Item interval={1000} >
                                    <ImgC urlImage={urlImage8} height={400} />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col sm={12} lg={6}>
                            <Carousel fade controls={false} indicators={false} className="carruselPrincipal " >
                                <Carousel.Item interval={1200} >
                                    <ImgC urlImage={urlImage4} height={400} />
                                </Carousel.Item>
                                <Carousel.Item interval={1200} >
                                    <ImgC urlImage={urlImage5} height={400} />
                                </Carousel.Item>
                                <Carousel.Item interval={1200} >
                                    <ImgC urlImage={urlImage6} height={400} />
                                </Carousel.Item>
                                <Carousel.Item interval={1200} >
                                    <ImgC urlImage={urlImage9} height={400} />
                                </Carousel.Item>
                                <Carousel.Item interval={1200} >
                                    <ImgC urlImage={urlImage10} height={400} />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
                <Container className='text-end mt-5 fs-5 '>
                    <h5 className='fuente-titulos'>Que son?</h5>
                    <p>{Descripcion1}</p>
                    <p>{Descripcion2}</p>
                    <p>{Descripcion3}</p>
                    <p>{Descripcion4}</p>
                    <p>{Descripcion5}</p>
                </Container>
                <Hablemos />
            </Container>
        </>
    )
}

export default ModeloTrabajo