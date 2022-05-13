import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from "./Paginas/Inicio";
import { Fragment } from "react";
import Estación1 from "./Paginas/Estacion1";
import NotFound from "./Paginas/NotFound";
import Rutas from "./Routes/Rutas";
import Encabezado from "./Components/Encabezado";
import Estacion2 from "./Paginas/Estacion2";
import Estacion3 from "./Paginas/Estacion3";

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/1" element={<Estación1 />} />
          <Route path="/2" element={<Estacion2 />} />
          <Route path="/3" element={<Estacion3 />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </Fragment>
  );
}
export default App;
