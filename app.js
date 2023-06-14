import express from 'express'
import routesDispositivo from './src/routes/dispositivoRoute.js'
import routesUsuario from './src/routes/usuarioRoute.js'
import routesConsumo from './src/routes/consumoRoute.js'

const app = express()

app.use(express.json())
app.use(routesDispositivo)
app.use(routesUsuario)
app.use(routesConsumo)

export default app