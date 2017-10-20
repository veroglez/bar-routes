const express = require('express')
const authController = require("../controllers/authController")
const authRoutes = express.Router()

authRoutes.get('/users', authController.getUsers)
authRoutes.get('/users/:id', authController.getSingleUser)
authRoutes.post('/signup', authController.signup)
authRoutes.post('/login', authController.login)
authRoutes.get('/logout', authController.logout)
authRoutes.get('/loggedin', authController.loggedIn)

module.exports = authRoutes
