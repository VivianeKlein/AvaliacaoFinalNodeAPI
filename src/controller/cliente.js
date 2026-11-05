import ServiceCliente from '../service/cliente.js'

class ControllerCliente {

    async Buscar(req, res) {
        try {
            const nome = await ServiceCliente.Buscar()
            res.send({ nome})
        } catch (error) {
            res.send({ message: error.message})
        }
    }

    BuscarUm(req, res) {
        try {
            const id = req.params.id
            const nome = ServiceCliente.BuscarUm(id)
            res.send({ nome })
        } catch (error) {
            res.send({ message: error.message})
        }
    }

    Cadastrar(req, res) {
        try {
            const nome = req.body.nome
            ServiceCliente.Cadastrar(nome)
            res.send({ message: "Cliente cadastrado com sucesso."})
        } catch (error) {
            res.send({ message: error.message })
        }
    }

    Alterar(req, res) {
        try {
            const id = req.params.id
            const nome = req.body.nome
            ServiceCliente.Alterar(id, nome)
            res.send({ message: "Cliente alterado com sucesso."})
        } catch (error) {
            res.send({ message: error.message})
        }
    }

    Deletar(req, res) {
        try {
            const id = req.params.id
            ServiceCliente.Deletar(id)
            req.send({ message: "Cliente deletado com sucesso."})
        } catch (error) {
            res.send({ message: error.message})
        }
    }

}

export default new ControllerCliente()
