import React from "react";
import Logo from "../img/tren1.png";
function Encabezado() {
  return (
    /*<div className="bg-primary " style={style}>
      <div class="position-relative d-flex align-items-center">
        <img
          src="/docs/5.1/assets/brand/bootstrap-logo.svg"
          alt=""
          width="90"
          height="70"
          class="align-text-center justify-center position-absolute left-0"
        />
        <p className="text-center">LA RUTA MAYA</p>
      </div>
    </div>*/
    <div className="container-fluid bg-light bg-gradient shadow user-select-none">
      <div className="row">
        <div className="col-4">
          <img
            src={Logo}
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
