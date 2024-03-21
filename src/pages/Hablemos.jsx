import { Container, Row, Col } from "react-bootstrap"
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Swal from 'sweetalert2';

const initialValues = {
    nombre: "",
    correo: "",
    mensaje: "",
    pais: "",
    social: ""}

const validationSchema = Yup.object({
    nombre: Yup.string().max(30, "Superaste la cantidad de caracteres").required("Campo requerido"),
    pais: Yup.string().max(30, "Superaste la cantidad de caracteres").required("Campo requerido"),
    social: Yup.string().max(100, "Superaste la cantidad de caracteres").required("Campo requerido"),
    correo: Yup.string().email("Correo no valido").max(256, "Superaste la cantidad de caracteres").required("Campo requerido"),
    mensaje: Yup.string().max(280, "Cantidad minima 280").min(20, "Cantidad minima 20").required("Campo requerido")
})

const Hablemos = (ev) => {

    const refForm = useRef()
    const onSubmit = () => {
        const serviceId = "service_5m1kytk"
        const templateId = "template_be0gf57"
        const apikey = "yKQ7Ea6MbUHc8lP2M"

        emailjs.sendForm(serviceId, templateId, refForm.current, apikey)
            .then(result => console.log(result.text))
            .catch(error => console.error(error))

        if (emailjs.sendForm) {
            Swal.fire({
                title: "Se mando su consulta con exito!",
                icon: "success",
            });

        }
    }
    const { handleChange, errors, handleSubmit } = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })



    return (
        <>
            <Container fluid className="pt-2">
                <Row>
                    <Col sm={12} lg={6} className="text-center prueba-clase my-auto">
                        <h4 className="text-center">Nuestros servicios son personalizados, únicos y hechos con mucho amor y dedicación. <br/><br/>
                            Te dejo un espacio para que nos contactes, nos cuentes tus intereses, nos des ideas, sugerencias, críticas y plantees tus dudas.
                            <br/><br/> No dudes en contactarnos!
                        </h4>
                    </Col>
                    <Col sm={12} lg={6}>

                        <Container className="p-md-4 mt-3 mt-md-0">
                            <Row>
                                <form ref={refForm} onSubmit={handleSubmit} style={{ backgroundColor: "#E1A3EA" }}>
                                <Col sm={12} className="mb-2"><label className="h4">Nombre</label>
                                        <input className="d-block w-100 rounded border border-dark py-1 px-2 focus-ring focus-ring-secondary" type="text" name="nombre" onChange={handleChange} />
                                        <small className='text-danger'>{errors?.nombre}</small>
                                    </Col>
                                    <Col sm={12} className="mb-2"><label className="h4">Pais desde el que me escribes</label>
                                        <input className="d-block w-100 rounded border border-dark py-1 px-2 focus-ring focus-ring-secondary" type="text" name="pais" onChange={handleChange} />
                                        <small className='text-danger'>{errors?.nombre}</small>
                                    </Col>
                                    <Col sm={12} className="mb-2"><label className="h4">Correo Electronico</label>
                                        <input type="email" name="correo" className="d-block w-100 rounded border border-dark py-1 px-2 focus-ring focus-ring-secondary" onChange={handleChange} />
                                        <small className='text-danger'>{errors?.correo}</small>
                                    </Col>
                                    <Col sm={12} className="mb-2"><label className="h4">Instagram o página web</label>
                                        <input className="d-block w-100 rounded border border-dark py-1 px-2 focus-ring focus-ring-secondary" type="text" name="social" onChange={handleChange} />
                                        <small className='text-danger'>{errors?.nombre}</small>
                                    </Col>
                                    <Col sm={12} className="mb-2"><label className="h4">Mensaje</label>
                                        <textarea name="mensaje" placeholder="Cuéntame sobre tu proyecto y lo que crees que necesita" className="d-block w-100 rounded border border-dark py-1 px-2 focus-ring focus-ring-secondary" rows={"5"} onChange={handleChange} />
                                        <small className='text-danger'>{errors?.mensaje}</small>
                                    </Col>
                                    <div className="d-flex justify-content-center">
                                        <Col sm={12} md={3} >
                                            <Button style={{ backgroundColor: "#CFF995", border: "none", fontFamily: "mont" }} type="submit" className="w-100 text-dark fs-5 mb-1">
                                                ENVIAR
                                            </Button>
                                        </Col>
                                    </div>
                                </form>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Hablemos