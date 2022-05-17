import React from "react";
import IMG from "../img/tren-maya (1).png";

function Encabezado() {
  return (
    <div className="container-fluid bg-light bg-gradient shadow user-select-none">
      <div className="row">
        <div className="col-4">
          <img
            src={IMG}
            height="45  "
            alt=".."
            class="align-items-center justify-center position-absolute left-0"
          />
        </div>
        <div className="Ruta col-6 fs-1 ">La ruta maya</div>
      </div>
    </div>
  );
}

export default Encabezado;
