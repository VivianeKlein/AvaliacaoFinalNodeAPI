import ServiceCliente from '../service/cliente.js'

class ControllerCliente {

    async Buscar(req, res) {
        try {
            const nomes = await ServiceCliente.Buscar()
            res.send({ nomes })
        } catch (error) {
            res.send({ message: error.message})
        }
    }

    async BuscarUm(req, res) {
        try {
            const id = req.params.id
            const nome = ServiceCliente.BuscarUm(id)
            res.send({ nome })
        } catch (error) {
            res.send({ message: error.message})
        }
    }

    async Cadastrar(req, res) {
        try {
            const nome = req.body.nome
            await ServiceCliente.Cadastrar(nome)
            res.send({ message: "Cliente cadastrado com sucesso."})
        } catch (error) {
            res.send({ message: error.message })
        }
    }

    async Alterar(req, res) {
        try {
            const id = req.params.id
            const nome = req.body.nome
            await ServiceCliente.Alterar(id, nome)
            res.send({ message: "Cliente alterado com sucesso."})
        } catch (error) {
            res.send({ message: error.message})
        }
    }

    async Deletar(req, res) {
        try {
            const id = req.params.id
            await ServiceCliente.Deletar(id)
            req.send({ message: "Cliente deletado com sucesso."})
        } catch (error) {
            res.send({ message: error.message})
        }
    }

}

export default new ControllerCliente()
