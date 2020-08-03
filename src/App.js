import React, { useState, useEffect } from 'react';
import NavBar from './Componentes/NavBar'
import ProductoCard from './Componentes/ProductoCard'
import db from './firebase'

const App = () => {

  const [products, setproducts] = useState([])

  useEffect(() => {
    obtenerProductos()
  }, [])

  const obtenerProductos = async () => {
    const productosDB = await db.collection('productos').get()
    const productos = await productosDB.docs.map((producto) => {
      const { id } = producto
      return { ...producto.data(), id } 
    })
    setproducts(productos)
  }

  return (
    <div>
      {/* AQUI VA NUESTRO NAVBAR */}
      <NavBar/>

      <div>
        { products.map((product) => {
          return <ProductoCard data={product}/>
        })}
      </div>

      {/* <ProductoCard titulo="Zapatillas Adidas" precio={150}/>
      <ProductoCard titulo="Zapatillas Nike" precio={180}/>
      <ProductoCard titulo="Zapatillas Puma" precio={200}/> */}
      
    </div>
  );
}

export default App;
