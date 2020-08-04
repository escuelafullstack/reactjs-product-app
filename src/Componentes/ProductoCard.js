import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditarProductoModal from './EditarProductoModal'
import db from '../firebase'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: '20%'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  pos: {
    marginBottom: 12,
  },
});

const ProductCard = (props) => {
  const { id, nombre, precio, descripcion } = props.data
  console.log("Johan: ProductCard -> props.data", props.data)
  const classes = useStyles();

  const eliminarProducto = async () => {
    await db.collection("productos").doc(id).delete()
  }

  return (
    <Card className={classes.root} elevation={3}>
      <CardContent>
        <Typography color="textPrimary" gutterBottom>
          Producto: {nombre}
        </Typography>
        <Typography color="textPrimary" gutterBottom>
          Descripcion: {descripcion}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Precio: {precio}
        </Typography>
      </CardContent>
      <CardActions>
        <EditarProductoModal product={props.data}/>
        <Button onClick={eliminarProducto}>Eliminar Producto</Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard