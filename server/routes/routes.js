const path = require('path')
const router = require('express').Router()
const routesController = require("../controllers/routesController")

router.post('/profile/:id/routes/new', routesController.createRoute);
router.post('/profile/places/new', routesController.createPlace);
router.get('/routesBaby', routesController.thisRouteIsForyouBaby);

module.exports = router
