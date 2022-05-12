import React from 'react'
import Inicio from '../Paginas/Inicio';

function Layout({children}) {
  return (
    <div className='conteiner'>
      <div className='section' > <Inicio/></div>
      <div className='section'>{children}</div>
      <div className='section'>pie de pagina</div>
    </div>
  )
}

export default Layout;