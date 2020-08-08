import React from 'react'
import { Route, Switch, Redirect} from 'react-router-dom'
import Inicio from '../Contenedores/Inicio'
import Productos from '../Contenedores/Productos'
import Login from '../Contenedores/Login'
import RegistroUsuario from '../Contenedores/RegistroUsuario'

const PrivateRoutes = ({ path, component }) => {

    const usuarioLogueado = localStorage.getItem("user")

    if(usuarioLogueado){
        return <Route path={path} component={component}/>
    }

    return <Redirect to="/login"/>
}

const Routes = () => {
    
    return(
        <Switch>
            <Route exact path="/" component={Inicio}/>
            <PrivateRoutes path="/productos" component={Productos}/>
            <Route path="/login" component={Login}/>
            <Route paht="/registro" component={RegistroUsuario}/>
        </Switch>
    )
}

export default Routes