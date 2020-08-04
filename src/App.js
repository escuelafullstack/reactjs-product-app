import React, { useState, useEffect } from 'react';
import NavBar from './Componentes/NavBar'
import ProductoCard from './Componentes/ProductoCard'
import AgregarProducto from './Componentes/AgregarProducto'
import db from './firebase'
import { Grid, Input, Button, Typography } from '@material-ui/core';

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
      <NavBar/>
      <Grid container>
        <AgregarProducto/>
        <Grid container>
          { products.map((product) => {
            return <Grid item style={{ margin: '20px'}}><ProductoCard data={product}/></Grid>
          })}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
