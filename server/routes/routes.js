const path = require('path')
const router = require('express').Router()
const routesController = require("../controllers/routesController")

router.post('/profile/:id/routes/new', routesController.createRoute);
router.post('/profile/places/new', routesController.createPlace);
router.get('/routes', routesController.showAllRoutes);
router.get('/routes/:id', routesController.getRoute);
router.put('/profile/delete/place', routesController.deletePlaces);
router.post('/', routesController.searchRoutes);


module.exports = router
