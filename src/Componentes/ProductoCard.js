import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
  const { titulo, precio } = props
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography color="textPrimary" gutterBottom>
          Producto: {titulo}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Precio: {precio}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Comprar</Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard