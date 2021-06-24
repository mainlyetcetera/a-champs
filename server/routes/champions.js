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
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const champion = await Champions.findOne({ where: { id } })

    res.json(champion)
  } catch (err) {
    console.log(err)
  }
})

// Add a like to the selected champion 
router.put('/:id', async (req, res) => {
  console.log('reach id-based put')
  res.send('id-based put reached')
})

module.exports = router
