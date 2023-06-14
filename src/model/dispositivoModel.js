import pool from './database/pool.js'

const Dispositivo = {
    registrar: (nome, descricao, callback) => {
        const sql = 'insert into dispositivo(nome, descricao) values (?, ?)'
        pool.query(sql, [nome, descricao], callback)
    },

    listar: (callback) => {
        const sql = 'select * from dispositivo'
        pool.query(sql, callback)
    },

    listarPorId: (id, callback) => {
        const sql = 'select * from dispositivo where id = ?'
        pool.query(sql, [id], callback)
    },

    atualizar:(nome, descricao, id, callback) => {
        const sql = 'update dispositivo set nome=?, descricao=? where id=?'
        pool.query(sql, [nome, descricao, id], callback)
    },

    deletar: (id, callback) => {
        const sql = 'delete from dispositivo where id=?'
        pool.query(sql, [id], callback)
    }
    
}

export default Dispositivo