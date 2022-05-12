import React from "react";
import trenmaya from "../img/trenmaya.jpg";

function Encabezado() {
  return (
    <div className="Encabezado-App row ">
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src={trenmaya}
              alt=""
              width="200"
              height="200"
              class="d-inline-block align-text-top"
            />
            LA RUTA MAYA
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Encabezado;
