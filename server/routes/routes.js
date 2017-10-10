const path = require('path')
const router = require('express').Router()
const routesController = require("../controllers/routesController")

router.post('/profile/:id/routes/new', routesController.createRoute);
router.post('/profile/places/new', routesController.createPlace);
router.get('/routes', routesController.showAllRoutes);
router.get('/profile/:id/routes', routesController.showNewPlaces);

module.exports = router
