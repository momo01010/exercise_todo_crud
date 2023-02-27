//* informacion para la conexion con la bsae de datos

const { Sequelize } = require('sequelize');

const db = new Sequelize({
    database: "todos",
    port: 5432,
    host: "localhost",
    username: "postgres",
    password: "postgres",
    dialect: "postgres"
});


module.exports = db;