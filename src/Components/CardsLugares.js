import React, { useEffect, useState } from "react";
import axios from "../Servicios/Axios";

function CardsLugares({ idEstacion }) {
  const [dataLugares, setDataLugares] = useState([]);

  const consultarLugares = async () => {
    const lugares = await axios.get(`api/lugares/${idEstacion}`);
    setDataLugares(lugares.data);
  };

  useEffect(() => {
    consultarLugares();
  }, []);

  return (
    <div className="row row-cols-1 row-cols-3 g-4">
      {dataLugares.map((lugar) => {
        return <Card data={lugar}></Card>;
      })}
    </div>
  );
}

const Card = ({ data }) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={data.imagen} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{data.lugar}</h5>
          <p className="card-text">
            descripcion: {data.descripcion} ubicacion:{data.ubicacion} horarios:
            {data.horarios}
            precio:
          </p>
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  );
};

export default CardsLugares;
