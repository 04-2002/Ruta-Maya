import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../Servicios/Axios";

export const BotonRedireccion = ({ children, to }) => {
  return (
    <Link class="Letter btn btn-dark text-start" role="button" to={to}>
      {children}
    </Link>
  );
};

//export default BotonRedireccion;

export const BotonesEstaciones = ({ idTramo }) => {
  const [dataEstaciones, setDataEstaciones] = useState([]);

  const obtenerEstaciones = async () => {
    const estaciones = await axios.get(`api/estaciones/${idTramo}`);
    console.log(estaciones.data);
    setDataEstaciones(estaciones.data);
  };

  useEffect(() => {
    obtenerEstaciones();
    console.log(dataEstaciones);
  }, []);

  return (
    <>
      {dataEstaciones.map((estacion, index) => {
        return (
          <BotonRedireccion to={"estacion/" + estacion._id} key={index}>
            {estacion.estacion}, {estacion.ubicacion}
          </BotonRedireccion>
        );
      })}
    </>
  );
};
