import React from 'react'
import { Route, Switch} from 'react-router-dom'
import Inicio from '../Contenedores/Inicio'
import Productos from '../Contenedores/Productos'
import Login from '../Contenedores/Login'
import RegistroUsuario from '../Contenedores/RegistroUsuario'

const Routes = () => {
    
    return(
        <Switch>
            <Route exact path="/" component={Inicio}/>
            <Route path="/productos" component={Productos}/>
            <Route path="/login" component={Login}/>
            <Route paht="/registro" component={RegistroUsuario}/>
        </Switch>
    )
}

export default Routes