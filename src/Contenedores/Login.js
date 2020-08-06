import React from 'react'
import { Grid, Input, Button } from '@material-ui/core'

const Login = () => {

    return(
        <Grid container spacing={3} style={{ margin: "20px"}}>

            <Grid item>
                <Input placeholder="Email"/>
            </Grid>

            <Grid item>
                <Input placeholder="Password"/>
            </Grid>
            <Grid item>
                <Button>Iniciar Sesion</Button>
            </Grid>
        </Grid>
    )
}

export default Login 