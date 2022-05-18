import { Fragment } from "react";
import { useParams } from "react-router-dom";
import Prueba from "../img/tren1.png";

import Card from "../Components/Card";

function Estación1() {
  const { estacion } = useParams();
  console.log(estacion);
  return (
    <Fragment>
      <div className="">
        <div class="card mb-3" width="100%">
          <div class="row g-0 align-items-center">
            <div class="col-4">
              <img src={Prueba} class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-8">
              <div class="card-body">
                <h5 class="card-title text-center">Estacion {estacion}</h5>
                <div class="card-text row">
                  <div className="col-6">
                    <div>ubicacion</div>
                    <div>horarios</div>
                  </div>
                  <div className="col-6">mas info</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Card />
    </Fragment>
  );
}

export default Estación1;
