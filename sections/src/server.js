const app = require('./app')
require('dotenv').config()

const port = 3333;
app.listen(port, ()=> console.log(`Servidor rodando na porta ${port}`))


