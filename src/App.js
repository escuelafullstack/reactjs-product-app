import React from 'react';
import logo from './logo.svg';
import './App.css';
import Producto from './Componentes/Producto'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Producto nombreProducto="Zapatillas Adidas" precioProducto="150"/>
        <Producto nombreProducto="Zapatillas Nike" precioProducto="180"/>
        <Producto nombreProducto="Zapatillas Puma" precioProducto="200"/>
        
      </header>
    </div>
  );
}

export default App;
