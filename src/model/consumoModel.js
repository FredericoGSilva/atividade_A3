import pool from './database/pool.js'

const Consumo = {
    registrar: (valor_consumo, callback) => {
        const sql = 'insert into consumo(valor_consumo) values (?)'
        pool.query(sql, [valor_consumo], callback)
    },

    listar: (callback) => {
        const sql = 'select * from consumo'
        pool.query(sql, callback)
    },

    listarPorId: (id, callback) => {
        const sql = 'select * from consumo where id = ?'
        pool.query(sql, [id], callback)
    },

    atualizar:(valor_consumo, id, callback) => {
        const sql = 'update consumo set valor_consumo=? where id=?'
        pool.query(sql, [valor_consumo, id], callback)
    },

    deletar: (id, callback) => {
        const sql = 'delete from consumo where id=?'
        pool.query(sql, [id], callback)
    },

    verificaId: (id) => {
        const sql = 'select * from consumo where id = ?'
        pool.query(sql, [id])
    }
}

export default Consumo