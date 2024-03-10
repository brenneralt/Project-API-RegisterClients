const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('clientes', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });

sequelize.authenticate()
.then(function(){
    console.log('Conexão com banco de dados realizada com SUCESSO!!0')
}).catch(function(){
    console.log("Erro, Conexão com banco de dados não realizada!!")
});

module.exports = sequelize;