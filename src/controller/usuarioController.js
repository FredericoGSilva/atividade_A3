import Usuario from '../model/usuarioModel.js'

const usuarioController = {
    registrar: (request, response) => {
        const {nome, login, senha} = request.body
        Usuario.registrar(nome, login, senha, (error, results, fields) => {
            if (!error) {
                response.status(201).json({mensagem: 'Usuario registrado com sucesso.'})
            } else {
                response.status(422).json({mensagem: 'Erro.'})
            }
        })
    },

    listarDispositivos: (request, response) => {
        const id = request.params.id
        const callback = (error, results, fields) => {
            mensagem(error, results, response)
        }
        if (id) {
            Usuario.listarPorId(id, callback);
        } else {
            Usuario.listar(callback);
        }
    },

    atualizar: (request, response) => {
        const {nome, login, senha} = request.body
        const id = request.params.id
        Usuario.atualizar(nome, login, senha, id, (error, results, fields) => {
            mensagem(error, results, response)
        })
    },

    deletar: (request, response) => {
        const id = request.params.id
        const callback = (error, results, fields) => {
            mensagem(error, results, response)
        }
        Usuario.deletar(id, callback)
    }

}

function mensagem(error, results, response) {
    if (!error) {
        if (results.length <= 0) {
            return response.status(404).json({mensagem: "Registro não encontrado."})
        }
        response.status(200).json(results)
    } else {
        response.status(404).json({mensagem: "Ocorreu um erro."})
    }
}



export default usuarioController