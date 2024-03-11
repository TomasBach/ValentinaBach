import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Hablemos from "../pages/Hablemos"
import NavbarC from "../components/NavbarC"
import SobreMi from "../pages/SobreMi"
import FichasTecnicas from "../pages/FichasTecnicas"
import DisenoEstampas from "../pages/DisenoEstampas"
import FigurinesModa from "../pages/FigurinesModa"
import FooterC from "../components/FooterC"

const RoutesViews = () => {
    return (
        <>
            <NavbarC />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/hablemos" element={<Hablemos />} />
                <Route path="/SobreMi" element={<SobreMi />} />
                <Route path="/FichasTecnicas" element={<FichasTecnicas />} />
                <Route path="/DisenoEstampas" element={<DisenoEstampas />} />
                <Route path="/FigurinesModa" element={<FigurinesModa />} />

            </Routes>
                <FooterC />

        </>
    )
}

export default RoutesViews