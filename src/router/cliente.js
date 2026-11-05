import express from 'express'

import controllerCliente from '../controller/cliente.js'

const router = express.Router()

router.get("/buscar", controllerCliente.Buscar)
router.get("/buscarUm/:id", controllerCliente.BuscarUm)
router.post("/cadastrar", controllerCliente.Cadastrar)
router.put("/alterar/:id", controllerCliente.Alterar)
router.delete("/deletar/:id", controllerCliente.Deletar)

export default router