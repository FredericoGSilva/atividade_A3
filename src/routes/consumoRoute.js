import express from 'express'
import consumoController from '../controller/consumoController.js'

const routes = express.Router()

routes.post('/consumo', consumoController.registrar)
routes.get('/consumo', consumoController.listarDispositivos)
routes.get('/consumo/:id', consumoController.listarDispositivos)
routes.put('/consumo/:id', consumoController.atualizar)
routes.delete('/consumo/:id', consumoController.deletar)

export default routes