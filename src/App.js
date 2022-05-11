
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import tren from "./img/tren-maya (1).png" 
import Vistas from './Components/Vistas';
import Inicio from "./Paginas/Inicio"
import { Fragment } from 'react';

function App() {
  return(
    <Fragment>
    <Router>
      <Routes>
        <Route path='/' element ={<Inicio/>}/>
        <Route path='/about' element ={<div>about</div>}/>
      </Routes>
    </Router>  
  
  
    </Fragment>
  
  );
  
}
export default App;
