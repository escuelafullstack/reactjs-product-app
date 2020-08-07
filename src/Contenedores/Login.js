import React, { useState } from 'react'
import { Grid, Input, Button } from '@material-ui/core'
import { auth } from 'firebase'
import { useHistory } from 'react-router-dom'

const Login = () => {

    const history = useHistory()

    const [email, setEmail] = useState("")
    const [password, setPassword] =useState("")

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const login = async () => {
        const { user } = await auth().signInWithEmailAndPassword(email, password)
        localStorage.setItem("user", JSON.stringify(user))
        history.push('/productos')
    }

    return(
        <Grid container spacing={3} style={{ margin: "20px"}}>

            <Grid item>
                <Input value={email} placeholder="Email" onChange={(event) => handleEmail(event)}/>
            </Grid>

            <Grid item>
                <Input value={password} placeholder="Password" onChange={(event) => handlePassword(event)}/>
            </Grid>
            <Grid item>
                <Button onClick={login}>Iniciar Sesion</Button>
            </Grid>
        </Grid>
    )
}

export default Login 