import { Container, Row, Col } from "react-bootstrap"
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Swal from 'sweetalert2';
import ImgC from "../components/ImgC";







const initialValues = {
    nombre: "",
    correo: "",
    mensaje: ""
}

const validationSchema = Yup.object({
    nombre: Yup.string().max(30, "Superaste la cantidad de caracteres").required("Campo requerido"),
    correo: Yup.string().email("Correo no valido").max(256, "Superaste la cantidad de caracteres").required("Campo requerido"),
    mensaje: Yup.string().max(280, "Cantidad minima 280").min(20, "Cantidad minima 20").required("Campo requerido")
})

const Hablemos = () => {

    const refForm = useRef()
    const onSubmit = () => {
        const serviceId = "service_erbrlnj"
        const templateId = "template_gjt8zq2"
        const apikey = "z89ogi_VH85JYCCJ_"

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
            <Container fluid className="pt-2 color-fondo">
                <Row>
                    <Col sm={12} lg={6} className="text-center">
                        <ImgC urlImage={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Drawing-fashion-design-fashion-draw-sketches.jpg/640px-Drawing-fashion-design-fashion-draw-sketches.jpg"} width={450} />
                    </Col>
                    <Col sm={12} lg={6}>
                        <h2 className="fuente-titulos text-center">Si estas aca por que quieres empezar tu proyecto con un diseño unico</h2>
                        <h4 className="text-center">Contame todo lo que tenga que saber para que lo hagamos juntos</h4>
                        <Container className="p-md-4 mt-3 mt-md-0">
                            <Row>
                                <form ref={refForm} onSubmit={handleSubmit}>
                                    <Col sm={12} className="mb-2"><label className="h4">Nombre</label>
                                        <input className="d-block w-100 rounded border border-dark py-1 px-2 focus-ring focus-ring-secondary" type="text" name="nombre" onChange={handleChange} />
                                        <small className='text-danger'>{errors?.nombre}</small>
                                    </Col>
                                    <Col sm={12} className="mb-2"><label className="h4">Correo Electronico</label>
                                        <input type="email" name="correo" className="d-block w-100 rounded border border-dark py-1 px-2 focus-ring focus-ring-secondary" onChange={handleChange} />
                                        <small className='text-danger'>{errors?.correo}</small>
                                    </Col>
                                    <Col sm={12} className="mb-2"><label className="h4">Mensaje</label>
                                        <textarea name="mensaje" placeholder="Cuentame sobre ti, tu proyecto, ideas, que estas buscando y tu presupuesto para poder darte una respuesta lo mas rapido posible!" className="d-block w-100 rounded border border-dark py-1 px-2 focus-ring focus-ring-secondary" rows={"7"} onChange={handleChange} />
                                        <small className='text-danger'>{errors?.mensaje}</small>
                                    </Col>
                                    <div className="d-flex justify-content-end">
                                        <Col sm={12} md={3} >
                                            <Button variant="primary" type="submit" className="w-100">
                                                Enviar
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