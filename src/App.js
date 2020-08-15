import React, { useState } from 'react';
import NavBar from './Componentes/NavBar'
import Routes from './Routes';
import UserContext from './Context/UserContext'

const App = () => {

  const setLogueado = (logueado) => {
    setUsuario({ ...usuario, logueado })
  }

  const [usuario, setUsuario] = useState({ logueado: null, setLogueado})

  return (
    <UserContext.Provider value={{ logueado: usuario.logueado, setLogueado: usuario.setLogueado }}>
      <NavBar/>
      <Routes/>
    </UserContext.Provider>
  );
}

export default App;
