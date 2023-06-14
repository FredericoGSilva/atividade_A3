import Dispositivo from '../model/dispositivoModel.js'

const dispositivoController = {
    registrar: (request, response) => {
        const {nome, descricao} = request.body
        Dispositivo.registrar(nome, descricao, (error, results, fields) => {
            if (!error) {
                response.status(201).json({mensagem: 'Dispositivo registrado com sucesso.'})
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
            Dispositivo.listarPorId(id, callback);
        } else {
            Dispositivo.listar(callback);
        }
    },

    atualizar: (request, response) => {
        const {nome, descricao} = request.body
        const id = request.params.id
        Dispositivo.atualizar(nome, descricao, id, (error, results, fields) => {
            mensagem(error, results, response)
        })
    },

    deletar: (request, response) => {
        const id = request.params.id
        const callback = (error, results, fields) => {
            mensagem(error, results, response)
        }
        Dispositivo.deletar(id, callback)
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



export default dispositivoController