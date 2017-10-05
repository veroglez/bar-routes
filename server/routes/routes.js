const path = require('path')
const router = require('express').Router()
const routesController = require("../controllers/routesController")

router.post('/routes/new', routesController.createRoute);

module.exports = router
