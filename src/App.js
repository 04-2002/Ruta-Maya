import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from "./Paginas/Inicio";
import { Fragment } from "react";
import Estación1 from "./Paginas/Estacion1";
import NotFound from "./Paginas/NotFound";
import Card from "./Components/Card";

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/1" element={<Estación1 />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </Fragment>
  );
}
export default App;
