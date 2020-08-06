import React, { useState, useEffect } from 'react';
import NavBar from './Componentes/NavBar'
import db from './firebase'
import Productos from './Contenedores/Productos';
import Inicio from './Contenedores/Inicio';
import Login from './Contenedores/Login';
import RegistroUsuario from './Contenedores/RegistroUsuario';

const App = () => {

  return (
    <div>
      <NavBar/>
      {/* <Productos/> */}
      {/* <Inicio/> */}
      {/* <Login/> */}
      <RegistroUsuario/>
    </div>
  );
}

export default App;
