import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from "./Paginas/Inicio";
import { Fragment } from "react";
import Estación1 from "./Paginas/Estacion1";
import NotFound from "./Paginas/NotFound";
import Estacion2 from "./Paginas/Estacion2";
import Estacion3 from "./Paginas/Estacion3";
import Estacion4 from "./Paginas/Estacion4";
import Estacion5 from "./Paginas/Estacion5";
import Estacion6 from "./Paginas/Estacion6";
import Card from "./Components/Card";
import Vista from "./Components/Vista";

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/1" element={<Vista />} />
        </Routes>
      </Router>
    </Fragment>
  );
}
export default App;
