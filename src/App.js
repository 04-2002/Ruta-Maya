import logo from './logo.svg';
import './App.css';
import tren from "./img/tren-maya (1).png" 

function App() {
  const style={
    width: "25rem",
    margin: "4rem"}

  return (
    <><div align="center" className="card" bg="green">
      <img src={tren}  className="card-img-top" alt="Card image cap" />
      <div className="card-body">
        <h1 className="card-title">RUTA MAYA</h1>
        <p className="card-text">NUEVO CRECIMIENTO Y FUTURO EN TURISMO.</p>
      </div>
    </div>
    <div className="d-flex justify-content-center">
    <div className="card" style={style}>
        <img src=".." className="card-img-top" alt="..." />
        <div className="card-body">
          <h2  align= "center" className="card-title">Estación 1</h2>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div class="d-grid gap-2">
            <button class="btn btn-primary" type="button">Tramo 1</button>
            <button class="btn btn-primary" type="button">Tramo 2</button>
            <button class="btn btn-primary" type="button">Tramo 3</button>
         </div>
        </div>
      </div><div className="card" style={style}>
        <img src=".." className="card-img-top" alt="..." />
        <div className="card-body">
          <h2  align= "center" className="card-title">Estación 2</h2>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div class="d-grid gap-2">
            <button class="btn btn-primary" type="button">Tramo 1</button>
            <button class="btn btn-primary" type="button">Tramo 2</button>
            <button class="btn btn-primary" type="button">Tramo 3</button>
         </div>
        </div>
      </div>
    <div className="card" style={style}>
        <img src=".." className="card-img-top" alt="..." />
        <div className="card-body">
          <h2 align= "center" className="card-title">Estación 3</h2>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div class="d-grid gap-2">
            <button class="btn btn-primary" type="button">Tramo 1</button>
            <button class="btn btn-primary" type="button">Tramo 2</button>
            <button class="btn btn-primary" type="button">Tramo 3</button>
         </div>
        </div>
      </div></div></>



  )
}
export default App;
