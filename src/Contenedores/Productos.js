import React, { useState, useEffect } from 'react'
import AgregarProducto from '../Componentes/AgregarProducto'
import { Grid } from '@material-ui/core'
import ProductoCard from '../Componentes/ProductoCard'
import db from '../firebase'

const Productos = () => {

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
        <Grid container>
            <AgregarProducto/>
            <Grid container>
            { products.map((product) => {
                return <Grid item style={{ margin: '20px'}}><ProductoCard data={product}/></Grid>
            })}
            </Grid>
        </Grid>
    )
}

export default Productos