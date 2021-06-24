const express = require('express')
const router = express.Router()
const db = require('../config/database')
const { DataTypes } = require('sequelize')
const Champions = require('../models/champion')(db, DataTypes)

// Get champion list
router.get('/', async (req, res) => {
  try {
    const champions = await Champions.findAll()
    res.json(champions)
  } catch (err) {
    console.log('err', err)
  }
})

// Get one champion
// Add a like to the selected champion 

module.exports = router
