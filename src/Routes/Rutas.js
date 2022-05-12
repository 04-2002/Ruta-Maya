import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Inicio from '../Paginas/Inicio';
import NotFound from '../Paginas/NotFound';

function Rutas() {
  return (
    <div>
      <Router>
        <Layout>
          <Routes>
            <Route exact path='/' element={<Inicio/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </Layout>
      </Router>
    </div>
  )
}

export default Rutas;