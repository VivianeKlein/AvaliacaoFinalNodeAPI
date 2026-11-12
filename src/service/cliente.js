import cliente from '../model/cliente.js'

class ServiceCliente {

    async Buscar() {
        return cliente.findAll()
    }

    async BuscarUm(id) {
        if(!id || isNaN(id)) {
            throw new Error("Informe um id valido.")
        }
        return cliente.findByPk(id)
    }

    async Cadastrar(id, nome, email, senha) {
        if(!nome) {
            throw new Error("Informe um nome valido.")
        }
        await cliente.create(id, nome, email, senha)
    }

    async Alterar(id, nome) {
        if(!id || isNaN(id) || !nome) {
            throw new Error("Informe id e nome validos.")
        }
        const clienteAlterar = await cliente.findByPk(id)

        if(!clienteAlterar) {
            throw new Error("Cliente não encontrado.")
        }
        clienteAlterar.nome = nome
        await clienteAlterar.save()    
    }

    async Deletar(id) {
        if(!id || isNaN(id)) {
            throw new Error("Informe um id valido.")
        }
        const clienteDelete = await cliente.findByPk(id)

        if(!clienteDelete) {
            throw new Error("Informe um id valido.")
        }

        await clienteDelete.destroy()
    }

}

export default new ServiceCliente()
