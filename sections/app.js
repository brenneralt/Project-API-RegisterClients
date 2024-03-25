const express = require('express');
const app = express();
const db = require('./src/models/db')
const user = require('./src/models/user')

const porta = 3333

app.use(express.json());
app.get('/', async (req, res) => {
    res.status(200).send("")
})
app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.status(200).json(users);
  });
app.post('/cadastrar', async (req, res) => {
    console.log(req.body);

    await User.create(req.body)
        .then(() => {
            return res.json({
                erro: false,
                mensagem: "Usuário cadastrado com sucesso!"
            })
        }).catch(() => {
            return res.status(400)
        })

    res.send("Página para usuários cadastrados");
})
app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
});
