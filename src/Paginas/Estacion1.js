import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../Servicios/Axios";

import CardsLugares from "../Components/CardsLugares";

function Estación1() {
  const [dataEstacion, setDataEstacion] = useState([]);
  const { estacion } = useParams();

  const obtenerEstacion = async () => {
    const estacionw = await axios.get(`/api/estaciones/estacion/${estacion}`);
    setDataEstacion(estacionw.data);
  };

  useEffect(() => {
    obtenerEstacion();
    console.log(dataEstacion);
  }, []);

  return (
    <>
      <div className="">
        <div class="card mb-3" width="100%">
          <div class="row g-0 align-items-center">
            <div class="col-4">
              <img
                src={dataEstacion.imagen}
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-8">
              <div class="card-body">
                <h5 class="Ruta card-title text-center">
                  Estacion {dataEstacion.estacion}
                </h5>
                <div class="card-text row">
                  <div className="col-6">
                    <div>ubicacion: {dataEstacion.ubicacion}</div>
                    <div>horarios: {dataEstacion.horarios}</div>
                  </div>
                  <div className="col-6">
                    mas info: {dataEstacion.descripcion}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CardsLugares idEstacion={estacion} />
    </>
  );
}

export default Estación1;
