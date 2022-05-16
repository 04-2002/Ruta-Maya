import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../layouts/Layout";
import Inicio from "../Paginas/Inicio";
import NotFound from "../Paginas/NotFound";

function Rutas() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/1" element={<Estación1 />} />
          <Route path="/2" element={<Estacion2 />} />
          <Route path="/3" element={<Estacion3 />} />
          <Route path="/4" element={<Estacion4 />} />
          <Route path="/5" element={<Estacion5 />} />
          <Route path="/6" element={<Estacion6 />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Rutas;
