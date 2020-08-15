import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router-dom'
import UserContext from '../Context/UserContext';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const { logueado, setLogueado } = useContext(UserContext)
  const history = useHistory()

  const registrar = () => {
    history.push('/registro')
  }

  const login = () => {
    history.push('/login')
  }

  const cerrarSesion = () => {
    setLogueado(null)
    localStorage.removeItem('user')
    history.push('/')
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Administrador de Productos
          </Typography>
          { logueado ?
            <Button color="inherit" onClick={cerrarSesion}>Cerrar Sesion</Button> :
            <div>
              <Button color="inherit" onClick={registrar}>Registrar</Button>
              <Button color="inherit" onClick={login}>Login</Button>
            </div>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar
