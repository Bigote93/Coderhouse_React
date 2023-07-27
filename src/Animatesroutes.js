//Modulos react
import Servicios from "./containers/pages/Servicios";

//Servicios React
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Error404 from "./containers/errors/Error404";

function AnimatedRoutes() {

    const ubicacion = useLocation()
    return (
        <AnimatePresence>

            <Routes location={ubicacion} key={ubicacion.pathname}>
                {/* Error Display */}
                <Route path="*" element={<Error404/>} />

                {/* Servicios Display */}
                <Route path="/" element={<Servicios/>} />

            </Routes>

        </AnimatePresence>

    );
}

export default AnimatedRoutes;