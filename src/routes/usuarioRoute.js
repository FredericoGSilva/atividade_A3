import express from 'express'
import usuarioController from '../controller/usuarioController.js'

const routes = express.Router()

routes.post('/usuario', usuarioController.registrar)
routes.get('/usuario', usuarioController.listarDispositivos)
routes.get('/usuario/:id', usuarioController.listarDispositivos)
routes.put('/usuario/:id', usuarioController.atualizar)
routes.delete('/usuario/:id', usuarioController.deletar)

export default routes