const path = require('path')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const express = require('express')

module.exports = (app) => {
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')
  app.use(logger('dev'))
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(cookieParser())
  app.use(express.static(path.join(__dirname, 'public')))
}
