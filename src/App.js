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
    const productos = await productosDB.docs.map((producto) => producto.data())
    setproducts(productos)
  }

  return (
    <div>
      {/* AQUI VA NUESTRO NAVBAR */}
      <NavBar/>

      <div>
        { products.map((product) => {
          return <ProductoCard titulo={product.nombre} precio={product.precio} descripcion={product.descripcion}/>
        })}
      </div>

      {/* <ProductoCard titulo="Zapatillas Adidas" precio={150}/>
      <ProductoCard titulo="Zapatillas Nike" precio={180}/>
      <ProductoCard titulo="Zapatillas Puma" precio={200}/> */}
      
    </div>
  );
}

export default App;
