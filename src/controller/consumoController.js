import Consumo from '../model/consumoModel.js'

const consumoController = {
    registrar: (request, response) => {
        const {valor_consumo} = request.body
        Consumo.registrar(valor_consumo, (error, results, fields) => {
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
            Consumo.listarPorId(id, callback);
        } else {
            Consumo.listar(callback);
        }
    },

    atualizar: (request, response) => {
        const {valor_consumo} = request.body
        const id = request.params.id
        const callback = (error, results, fields) => {
            if (!error) {
              if (results.affectedRows === 0) {
                return response.status(404).json({ mensagem: 'Registro não encontrado.' });
              }
              // O registro foi atualizado com sucesso
              return response.status(200).json({ mensagem: 'Registro atualizado com sucesso.' });
            } else {
              console.error('Erro ao atualizar registro:', error);
              return response.status(500).json({ mensagem: 'Ocorreu um erro ao atualizar o registro.' });
            }
          };
        
          Consumo.atualizar(valor_consumo, id, callback);
    },

    deletar: (request, response) => {
        const id = request.params.id
        const callback = (error, results, fields) => {
            mensagem(error, results, response)
        }
        Consumo.deletar(id, callback)
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

export default consumoController