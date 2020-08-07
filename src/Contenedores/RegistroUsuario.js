import React, { useState } from 'react'
import { Grid, Input, Button } from '@material-ui/core'
import { auth } from 'firebase'
import { useHistory } from 'react-router-dom'


const RegistroUsuario = () => {

    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const registrarUsuario = async () => {
        const registro = await auth().createUserWithEmailAndPassword(email, password)
        if(registro){
            const { user } = await auth().signInWithEmailAndPassword(email, password)
            if(user){
                const userForLocalStorage = JSON.stringify(user)
                localStorage.setItem("user", userForLocalStorage)
                history.push('/productos')
            }
        }
    }

    return(
        <Grid container spacing={3} style={{ margin: "20px"}}>

            <Grid item>
                <Input value={email} onChange={(event) => handleEmail(event)} placeholder="Email"/>
            </Grid>

            <Grid item>
                <Input value={password} onChange={(event) => handlePassword(event)} placeholder="Password"/>
            </Grid>
            <Grid item>
                <Button onClick={registrarUsuario}>Registrar Usuario</Button>
            </Grid>
        </Grid>
    )
}

export default RegistroUsuario 