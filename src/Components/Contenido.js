import React, { useEffect, useState } from "react";
/* import React{useState, useEffect} from "react"; */
import tren1 from "../img/tren1.png";
import tren2 from "../img/tren2.png";
import tren3 from "../img/tren3.png";
import Cards from "./Cards";
import { BotonesEstaciones } from "./BtnRedireccion";
import axios from "../Servicios/Axios";

function Contenido() {
  const [data, setData] = useState([]);

  const consultarTramos = async () => {
    const tramos = await axios.get("/api/tramos");
    //console.log(tramos.data);
    setData(tramos.data);
  };

  useEffect(() => {
    consultarTramos();
    console.log(data);
  }, []);

  return (
    <div className="Content-App row row-cols-1 row-cols-md-3 g-4 container-fluid pb-5 user-select-none">
      {data.map((tramo, index) => {
        return (
          <Cards
            key={index}
            title={tramo.tramo}
            description={tramo.descripcion}
            img={tramo.imagen}
          >
            {/* <BotonRedireccion to="/estacion/1">
              PALENQUE, CHIAPAS
            </BotonRedireccion>
            <BotonRedireccion to="/estacion/1">
              BOCA DEL CERRO, TABASCO
            </BotonRedireccion>
            <BotonRedireccion to="/estacion/1">
              TRIUNFO, TABASCO
            </BotonRedireccion> */}
            <BotonesEstaciones idTramo={tramo._id}></BotonesEstaciones>
          </Cards>
        );
      })}
    </div>
  );
}

export default Contenido;
