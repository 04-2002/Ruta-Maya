import React from "react";
import { NavLink } from "react-router-dom";
import tren1 from "../img/tren1.png";
import tren2 from "../img/tren2.png";
import tren3 from "../img/tren3.png";
import Estación1 from "../Paginas/Estacion1";
import Estacion2 from "../Paginas/Estacion2";
import Estacion3 from "../Paginas/Estacion3";

function Contenido() {
  return (
    <div className="Content-App row row-cols-1 row-cols-md-3 g-4 container-fluid">
      <div class="col">
        <div class="card h-100">
          <img src={tren1} className="card-img-top shadow" alt="..." />
          <div class="card-body">
            <h5 class="card-title">TRAMO 1</h5>
            <p class="card-text">...</p>
            <ul>
              <li>
                <NavLink to="/1">
                  <Estación1 />
                </NavLink>
              </li>
              <li>
                <NavLink to="/2">
                  <Estacion2 />
                </NavLink>
              </li>
              <li>
                <NavLink to="/3">
                  <Estacion3 />
                </NavLink>
              </li>
            </ul>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img src={tren2} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">TRAMO 2</h5>
            <p class="card-text">...</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img src={tren3} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">TRAMO 3</h5>
            <p class="card-text">
              <h1>PROXIMAMENTE...</h1>
            </p>
          </div>
          <div class="card-footer">
            <small class="text-muted">TRABAJAMOS EN ELLO 7w7</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contenido;
