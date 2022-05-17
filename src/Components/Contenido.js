import React from "react";
import { NavLink } from "react-router-dom";
import tren1 from "../img/tren1.png";
import tren2 from "../img/tren2.png";
import tren3 from "../img/tren3.png";
import Estación1 from "../Paginas/Estacion1";

function Contenido() {
  return (
    <div className="Content-App row row-cols-1 row-cols-md-3 g-4 container-fluid pb-5 user-select-none">
      <div class="col">
        <div class="card h-100">
          <img src={tren1} className="card-img-top shadow" alt="..." />
          <div class="card-body">
            <h3 class="card-title">TRAMO 1</h3>
            <p class="card-text">
              La ruta del Tren Maya recorre cinco estados del sureste de México
              en donde se ubican 21 estaciones y 14 paraderos.
            </p>
            <ul>
              <li>
                <NavLink to="/1">
                  <Estación1 />
                </NavLink>
              </li>
              <li>
                <NavLink to="/2">
                  <Estación1 />
                </NavLink>
              </li>
              <li>
                <NavLink to="/3">
                  <Estación1 />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img src={tren2} class="card-img-top" alt="..." />
          <div class="card-body">
            <h3 class="card-title">TRAMO 2</h3>
            <p class="card-text">
              En cada estación y paradero del Tren Maya habrá un espacio para la
              venta de sus productos y sus servicios, impulsando el Turismo
              Comunitario.
            </p>
            <ul>
              <li>
                <NavLink to="/4">el triunfo</NavLink>
              </li>
              <li>
                <NavLink to="/5">
                  <Estación1 />
                </NavLink>
              </li>
              <li>
                <NavLink to="/6">
                  <Estación1 />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img src={tren3} class="card-img-top" alt="..." />
          <div class="card-body">
            <h3 class="card-title">TRAMO 3</h3>
            <p class="card-text">
              <h1>PROXIMAMENTE...</h1>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contenido;
