import React from 'react';
import Producto from './Componentes/Producto'
import NavBar from './Componentes/NavBar'
import ProductoCard from './Componentes/ProductoCard'


const App = () => {
  return (
    <div>
      {/* AQUI VA NUESTRO NAVBAR */}
      <NavBar/>
      <ProductoCard titulo="Zapatillas Adidas" precio={150}/>
      <ProductoCard titulo="Zapatillas Nike" precio={180}/>
      <ProductoCard titulo="Zapatillas Puma" precio={200}/>
      
    </div>
  );
}

export default App;
