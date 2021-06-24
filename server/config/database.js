const { Sequelize } = require('sequelize')

module.exports = new Sequelize('a_champs', 'postgres', '', {
  host: 'localhost',
  dialect: 'postgres'
})
