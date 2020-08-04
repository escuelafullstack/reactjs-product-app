import React, { useState } from 'react'
import { Grid, Typography, Input, Button } from '@material-ui/core'
import db from '../firebase'

const AgregarProducto = () => {

    const [nombreProducto, setNombreProducto] = useState("")
    const [precioProducto, setPrecioProducto] = useState("")
    const [descripcionProducto, setDescripcionProducto] = useState("")


    const changeNombreProducto = (e) => {
        setNombreProducto(e.target.value)
    }

    const changePrecioProducto = (e) => {
        setPrecioProducto(e.target.value)
    }

    const changeDescripcionProducto = (e) => {
        setDescripcionProducto(e.target.value)
    }

    const handleGuardarProducto = async () => {
        // Configurar nuestro documento
        const producto = {
            nombre: nombreProducto,
            precio: precioProducto,
            descripcion: descripcionProducto
        }

        // Llamar al metodo que registra un documento en la BD de FireStore
        await db.collection("productos").add(producto)

    }


    return (
        <Grid container>
            <Typography style={{ margin: '20px' }}>
                <h2>Agregar Productos</h2>
            </Typography>
            <Grid container spacing={3}>
                <Grid item style={{ margin: '20px' }}>
                    <Input value={nombreProducto} placeholder="Nombre" onChange={(event) => changeNombreProducto(event)}/>
                </Grid>
                <Grid item style={{ margin: '20px' }}>
                    <Input value={precioProducto} placeholder="Precio" onChange={(event) => changePrecioProducto(event)}/>
                </Grid>
                <Grid item style={{ margin: '20px' }}>
                    <Input value={descripcionProducto} placeholder="Descripcion" onChange={(event) => changeDescripcionProducto(event)}/>
                </Grid>
                <Grid item style={{ margin: '20px' }}>
                    <Button onClick={handleGuardarProducto}>Guardar Producto</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default AgregarProducto