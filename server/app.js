const express = require('express')
const path = require('path')

const app = express()

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server started on port ${PORT}`))

app.get('/', (req, res) => res.send('app online!'))

app.use('/champions', require('./routes/champions'))
