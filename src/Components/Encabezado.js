import React from "react";
import IMG from "../img/tren-maya (1).png";

function Encabezado() {
  const dimetionImg = {
    height: "100%",
  };

  const bg = {
    background: "#282828",
    height: "70px",
  };

  return (
    <div className="position-relative " style={bg}>
      <img
        className="position-absolute"
        src={IMG}
        alt="logotipo"
        style={dimetionImg}
      />
      <p className="Ruta text-center align-items-center mb-0 pt-2">Ruta Maya</p>
    </div>
  );
}

export default Encabezado;
