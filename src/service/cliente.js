import cliente from '../model/cliente.js'

class serviceCliente {

    async Buscar() {
        return cliente.findAll()
    }

    BuscarUm(id) {
        if(!id || isNaN(id)) {
            throw new Error("Informe um id valido.")
        }
        return cliente.BuscarUm(id)
    }

    Cadastrar(nome) {
        if(!nome) {
            throw new Error("Informe um nome valido.")
        }
        cliente.Cadastrar(nome)
    }

    Alterar(id, nome) {
        if(!id || isNaN(id) || !nome) {
            throw new Error("Informe id e nome validos.")
        }
        cliente.Cadastrar(id, nome)
    }

    Deletar(id) {
        if(!id || isNaN(id)) {
            throw new Error("Informe um id valido.")
        }
        cliente.Deletar(id)
    }

}

export default new serviceCliente()
