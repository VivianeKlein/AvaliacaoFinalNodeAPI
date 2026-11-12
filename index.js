import express from 'express'

import routerCliente from './src/router/cliente.js'

import database from './src/config/database.js'

const app = express()
app.use(express.json())

app.use("/api/", routerCliente)

database.db
    .sync({ force: false })
    .then((_) => {
        app.listen(3000, () => {
            console.log("Servidor rodando na porta 3000")
        })
    })
    .catch((e) => {
        console.log(e)
    })
    