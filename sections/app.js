const express = require('express');
const app = express();
const db = require('./src/models/db')
const User = require('./src/models/User')

const porta = 3333

app.use(express.json());

app.get('/clientes', async (req,res)=>{
    res.send("Página Inicial")
    res.json(res.body)
})
app.post('/cadastrar', async (req,res)=>{
    console.log(req.body);
    
    await User.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Usuário cadastrado com sucesso!"
        })
    }).catch(() =>{
        return res.status(400)
    })
    
    res.send("Página Cadastrar");
})
app.listen(porta, ()=>{
    console.log(`Servidor rodando na porta ${porta}`)
});
