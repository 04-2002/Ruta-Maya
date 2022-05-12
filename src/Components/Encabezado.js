import React from "react";
import Banner from "../img/Banner_Tren_Maya2.png";

function Encabezado() {
  return (
    <div className="container-fluid">
      <img src={Banner} className="img-fluid" alt="..." />

      <div className="text-center fs-1">la ruta maya</div>
      <div className="container-fluid text-center fst-italic">perre vergue</div>
    </div>
  );
}

export default Encabezado;
