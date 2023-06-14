import pool from './database/pool.js'

const Usuario = {
    registrar: (nome, login, senha, callback) => {
        const sql = 'insert into usuario(nome, login, senha) values (?, ?, ?)'
        pool.query(sql, [nome, login, senha], callback)
    },

    listar: (callback) => {
        const sql = 'select * from usuario'
        pool.query(sql, callback)
    },

    listarPorId: (id, callback) => {
        const sql = 'select * from usuario where id = ?'
        pool.query(sql, [id], callback)
    },

    atualizar:(nome, login, senha, id, callback) => {
        const sql = 'update usuario set nome=?, login=?, senha=? where id=?'
        pool.query(sql, [nome, login, senha, id], callback)
    },

    deletar: (id, callback) => {
        const sql = 'delete from usuario where id=?'
        pool.query(sql, [id], callback)
    }   
}

export default Usuario