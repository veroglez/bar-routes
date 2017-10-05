const path = require('path')
const router = require('express').Router()
const profileController = require("../controllers/profileController")

router.put('/profile/:id/edit', profileController.editProfile);

module.exports = router
