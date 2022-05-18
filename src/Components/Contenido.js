import React from "react";
import tren1 from "../img/tren1.png";
import tren2 from "../img/tren2.png";
import tren3 from "../img/tren3.png";
import Cards from "./Cards";
import BotonRedireccion from "./BtnRedireccion";

function Contenido() {
  return (
    <div className="Content-App row row-cols-1 row-cols-md-3 g-4 container-fluid pb-5 user-select-none">
      <Cards title="Tramo 1" description="un ejemplo" img={tren1}>
        <BotonRedireccion to="/estacion/1">PALENQUE, CHIAPAS</BotonRedireccion>
        <BotonRedireccion to="/estacion/851">
          BOCA DEL CERRO, TABASCO
        </BotonRedireccion>
        <BotonRedireccion to="/estacion2">TRIUNFO, TABASCO</BotonRedireccion>
      </Cards>
      <Cards title="Tramo 2" description="un ejemplo" img={tren2}>
        <BotonRedireccion to="/estacion1">ESCARCEGA, CAMPECHE</BotonRedireccion>
        <BotonRedireccion to="/estacion2">EDNZA, CAMPECHE</BotonRedireccion>
        <BotonRedireccion to="/estacion2">
          SAN FRANCISCO, CAMPECHE
        </BotonRedireccion>
      </Cards>
      <Cards title="Tramo 3" description="un ejemplo" img={tren3}>
        <BotonRedireccion to="/estacion1">
          AEROPUERTO DE MÉRIDA, YUCATAN
        </BotonRedireccion>
        <BotonRedireccion to="/estacion79">TEYA, YUCATÁN</BotonRedireccion>
        <BotonRedireccion to="/estacion2">IZAMAL, YUCATÁN</BotonRedireccion>
      </Cards>
    </div>
  );
}

export default Contenido;
