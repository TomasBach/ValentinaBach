import React from 'react'
import { Carousel, Container, Row, Col } from 'react-bootstrap'
import ImgC from './ImgC'
import "../css/modelotrabajo.css"
import "../css/cuadrosinfo.css"
const ModeloTrabajo = ({ Titulo, QueIncluyen, ComoSeEncarga, OtrasPreguntas, urlImage1, urlImage2, urlImage3, urlImage4, urlImage5, urlImage6 }) => {
    return (
        <>
            <Container fluid className='direccion-trabajo'>
                <h2 className='text-center my-3'>{Titulo}</h2>
                <Container >
                    <Row>
                        <Col sm={12} lg={6}>
                            <Carousel fade controls={false} indicators={false} className="carruselPrincipal " >
                                <Carousel.Item interval={650} >
                                    <ImgC urlImage={urlImage1} height={400} />
                                </Carousel.Item>
                                <Carousel.Item interval={700} >
                                    <ImgC urlImage={urlImage2} height={400} />
                                </Carousel.Item>
                                <Carousel.Item interval={650} >
                                    <ImgC urlImage={urlImage3} height={400} />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col sm={12} lg={6}>
                            <Carousel fade controls={false} indicators={false} className="carruselPrincipal " >
                                <Carousel.Item interval={700} >
                                    <ImgC urlImage={urlImage4} height={400} />
                                </Carousel.Item>
                                <Carousel.Item interval={650} >
                                    <ImgC urlImage={urlImage5} height={400} />
                                </Carousel.Item>
                                <Carousel.Item interval={700} >
                                    <ImgC urlImage={urlImage6} height={400} />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
                <Container className='text-end mt-3 fs-5 '>
                    <h5 className='fuente-titulos'>Que incluyen?</h5>
                    <p>{QueIncluyen}</p>
                    <h5 className='fuente-titulos'>Como se encargan?</h5>
                    <p>{ComoSeEncarga}</p>
                    <h5 className='fuente-titulos'>Otras Preguntas</h5>
                    <p>{OtrasPreguntas}</p>
                </Container>


            </Container>
        </>
    )
}

export default ModeloTrabajo