import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Hablemos from "../pages/Hablemos"
import NavbarC from "../components/NavbarC"
import FichasTecnicas from "../pages/FichasTecnicas"
import DisenoEstampas from "../pages/DisenoEstampas"
import FigurinesModa from "../pages/FigurinesModa"
import FooterC from "../components/FooterC"
import FAQS from "../pages/FAQS"

const RoutesViews = () => {

  

    return (
        <>
            <NavbarC />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Hablemos" element={<Hablemos />} />
                <Route path="/FichasTecnicas" element={<FichasTecnicas />} />
                <Route path="/DisenoEstampas" element={<DisenoEstampas />} />
                <Route path="/FigurinesModa" element={<FigurinesModa />} />
                <Route path="/Faqs" element={<FAQS />} />
            </Routes>
            <FooterC />

        </>
    )
}

export default RoutesViews