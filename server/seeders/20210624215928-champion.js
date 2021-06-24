'use strict'

const data = require('../data/data')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Champions', data, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Champions', data, {})
  }
}

/*
'use strict'

const data = require('../data')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // don't forget this line
    await queryInterface.bulkInsert('Products', data, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {})
  }
}


 
*/
