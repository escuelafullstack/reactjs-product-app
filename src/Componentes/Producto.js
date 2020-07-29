import React, { useState } from 'react'
import { Button } from '@material-ui/core'

function Producto(props) {
    
    const [ moneda, setMoneda ] = useState({ nombre: 'dolares', signo: '$' })

    const cambiarASoles = () => {
        setMoneda({ nombre: 'soles', signo: 'S/' })
    }

    const cambiarADolares = () => {
        setMoneda({ nombre: 'dolares', signo: '$' })
    }

    return(
        <div>
            <h1>Producto: {props.nombreProducto}</h1>
            <p>Precio: {moneda.signo}{props.precioProducto} {moneda.nombre}</p>
            <Button color="primary" onClick={cambiarASoles}>Soles</Button>
            <Button color="primary" onClick={cambiarADolares}>Dolares</Button>
        </div>
    )
}

export default Producto