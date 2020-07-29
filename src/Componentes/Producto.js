import React, { useState } from 'react'

function Producto(props) {
    
    const [ moneda, setMoneda ] = useState({ nombre: 'dolares', signo: '$' })

    const cambiarASoles = () => {
        setMoneda({ nombre: 'soles', signo: 'S/' })
    }

    const cambiarADolares = () => {
        setMoneda({ nombre: 'dolares', signo: '$' })
    }

    return(
        <div style={{ backgroundColor: 'black' }}>
            <h1>Producto: {props.nombreProducto}</h1>
            <p>Precio: {moneda.signo}{props.precioProducto} {moneda.nombre}</p>
            <button onClick={cambiarASoles}>Soles</button>
            <button onClick={cambiarADolares}>Dolares</button>
        </div>
    )
}

export default Producto