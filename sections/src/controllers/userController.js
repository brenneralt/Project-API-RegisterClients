const tasksModel = require('../models/userModel')

const listarTodos = async (req, res) => {
    const users = await tasksModel.listarTodos();
    return res.status(200).json(users1)
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

