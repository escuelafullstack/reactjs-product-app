import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, Input } from '@material-ui/core';
import db from '../firebase'

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal(props) {
    const { id, nombre, precio, descripcion } = props.product


  const classes = useStyles();
  
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [nombreProducto, setNombreProducto] = useState(nombre)
  const [precioProducto, setPrecioProducto] = useState(precio)
  const [descripcionProducto, setDescripcionProducto] = useState(descripcion)

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
    //Obtener los campos del producto
    const product = {
        nombre: nombreProducto,
        precio: precioProducto,
        descripcion: descripcionProducto
    }
    //Buscar el producto por id en la BD
    const productoBD = await db.collection("productos").doc(id)

    //Guardar en la BD
    productoBD.set(product)
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Editar Producto</h2>
      <p id="simple-modal-description">
        Ingrese los datos del producto
      </p>
        <p>Producto: {nombre} {precio} {descripcion}</p>
        <Input value={nombreProducto} placeholder="Nombre" onChange={(event) => changeNombreProducto(event)}/>
        <br/>
        <Input value={precioProducto} placeholder="Precio" onChange={ (event) => changePrecioProducto(event) }/>
        <br/>
        <Input value={descripcionProducto} placeholder="Descripcion" onChange={ (event) => changeDescripcionProducto(event)}/>
        <br/>
        <Button onClick={handleGuardarProducto}>Guardar Producto</Button>

    </div>
  );

  return (
    <div>
      <Button type="button" onClick={handleOpen}>
        Editar Producto
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}