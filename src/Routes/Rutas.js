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
          <Route path="/" element={<Inicio />} />
          <Route path="/1" element={<Estación1 />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Rutas;
