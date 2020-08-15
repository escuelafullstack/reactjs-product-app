import { createContext } from 'react'

const dataInicial = { logueado: null, setLogueado: () => {} }
const UserContext = createContext(dataInicial)

export default UserContext