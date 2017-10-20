require("dotenv").config()
const express = require('express')
const path = require('path')
const authRoutes = require('./routes/auth')
const profileRoutes = require('./routes/profile')
const routesRoutes = require('./routes/routes')
const app = express()

require('./config/database')
require('./config/cors')(app)
require('./config/session')(app)
require('./config/express')(app)
require('./passport/serializers')
require('./passport/local')

app.use('/api', authRoutes)
app.use('/api', profileRoutes)
app.use('/api', routesRoutes)
app.use(function(req, res){
  res.sendFile(__dirname + './public/index.html')
})

require('./config/error-handler')(app)

module.exports = app
