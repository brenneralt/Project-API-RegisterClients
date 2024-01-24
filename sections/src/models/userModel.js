const connection = require('./connection')

const listarTodos = async() => {
 const clientes = await connection.execute('SELECT * FROM clientes')
}
const buscarPorID = () => {

}
const buscarPorNome = () => {

}
const buscarPorEmail = () => {

}

module.exports = {
    listarTodos,
    buscarPorID,
    buscarPorNome,
    buscarPorEmail
}

