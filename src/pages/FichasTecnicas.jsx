import React from 'react'
import ModeloTrabajo from '../components/ModeloTrabajo'
import { Carousel, Container, Row, Col } from 'react-bootstrap'
import "../css/modelotrabajo.css"
import "../css/cuadrosinfo.css"

const FichasTecnicas = ({ Titulo, QueIncluyen, ComoSeEncarga, OtrasPreguntas, urlImage1, urlImage2, urlImage3, urlImage4, urlImage5, urlImage6 }) => {
    return (
        <>
            <ModeloTrabajo Titulo={"Fichas Tecnicas"} QueIncluyen={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aliquid officia quasi sed non nisi optio fuga voluptatibus, error consequatur unde earum libero ex voluptates. Ratione quo optio beatae dolores!"}
                ComoSeEncarga={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aliquid officia quasi sed non nisi optio fuga voluptatibus, error consequatur unde earum libero ex voluptates. Ratione quo optio beatae dolores!"}
                OtrasPreguntas={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aliquid officia quasi sed non nisi optio fuga voluptatibus, error consequatur unde earum libero ex voluptates. Ratione quo optio beatae dolores!"}
                urlImage1={"https://images.fravega.com/f300/81a7f370880a7b5398a0ac05dcba415d.jpg"}
                urlImage2={"https://www.sevenelectronics.com.ar/images/000880609436587091925Foto-Principal.jpg"}
                urlImage3={"https://images.fravega.com/f300/8829a2cfcb1d564156cd81757ee7391d.png"}
                urlImage4={"https://tiendaonline.movistar.com.ar/media/catalog/product/cache/4bc237c39ea3bd569ee738bf9a6d02c2/s/a/samsung-a14-front.png"}
                urlImage5={"https://tienda.claro.com.ar/staticContent/Claro/images/catalog/productos/200x310/70011324.webp"}
                urlImage6={"https://s3-sa-east-1.amazonaws.com/saasargentina/qBnvmNIS5DenPq7OeT4a/imagen"} />

        </>
    )
}

export default FichasTecnicas