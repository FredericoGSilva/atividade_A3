import express from 'express'
import dispositivoController from '../controller/dispositivoController.js'

const routes = express.Router()

routes.post('/dispositivo', dispositivoController.registrar)
routes.get('/dispositivo', dispositivoController.listarDispositivos)
routes.get('/dispositivo/:id', dispositivoController.listarDispositivos)
routes.put('/dispositivo/:id', dispositivoController.atualizar)
routes.delete('/dispositivo/:id', dispositivoController.deletar)

export default routes