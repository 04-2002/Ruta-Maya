function Inicio() {
  

        const style={
            width: "25rem",
            margin: "4rem"}
        
          return (
            <><div align="center" className="card" bg="green">
              <div className="app-img-inicio">
              <img src=".." className="card-img-top"  alt="Card image cap" />
              </div>
              <div className="card-body sm-6">
                <h1 className="card-title">RUTA MAYA</h1>
                <p className="card-text">La ruta del Tren Maya recorre cinco estados del sureste de México en donde se ubican 21 estaciones y 14 paraderos.</p>
              </div>
            </div>
            <div className="d-flex justify-content-center">
            <div className="card" style={style}>
                <img src=".." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h2  align= "center" className="card-title">Estación 1</h2>
                  <p className="card-text">LUEGO PENSAMOS QUE PONER.</p>
                  <div class="d-grid gap-2">
                    <button class="btn btn-primary" type="button">PALENQUE, CHIAPAS</button>
                    <button class="btn btn-primary" type="button">BOCA DEL CERRO, TABASCO</button>
                    <button class="btn btn-primary" type="button">EL TRIUNFO, TABASCO</button>
                 </div>
                </div>
              </div><div className="card" style={style}>
                <img src=".." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h2  align= "center" className="card-title">Estación 2</h2>
                  <p className="card-text">LECHE PAPU.</p>
                  <div class="d-grid gap-2">
                    <button class="btn btn-primary" type="button">ESCARCEGA, CAMPECHE</button>
                    <button class="btn btn-primary" type="button">EDZNA, CAMPECHE</button>
                    <button class="btn btn-primary" type="button">SAN FRANCISCO DE CAMPECHE, CAMPECHE</button>
                 </div>
                </div>
              </div>
            <div className="card" style={style}>
                <img src=".." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h2 align= "center" className="card-title">Estación 3</h2>
                  <p className="card-text">NARCISO COME TULA.</p>
                  <div class="d-grid gap-2">
                    <button class="btn btn-primary" type="button">MERIDA AEROPUERTO, YUCATAN</button>
                    <button class="btn btn-primary" type="button">TEYA, YUCATAN</button>
                    <button class="btn btn-primary" type="button">IZAMAL, YUCATAN</button>
                 </div>
                </div>
              </div></div></>
        
        
        
          )


}
export default Inicio;