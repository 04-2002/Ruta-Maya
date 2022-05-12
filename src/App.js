import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from "./Paginas/Inicio";
import { Fragment } from "react";
import Estación1 from "./Paginas/Estacion1";
import Rutas from "./Routes/Rutas";
import Encabezado from "./Components/Encabezado";

function App() {
  return (
    <Fragment>
      <Inicio />
    </Fragment>
  );
}
export default App;
