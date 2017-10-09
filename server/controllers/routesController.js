const Place = require('../models/Place')
const Route = require('../models/Route')
const path = require('path')

module.exports = {
  createPlace: (req, res, next) => {
    const {id, latitude, longitude} = req.body

    Place.findOne({id:id}).exec()
    .then(place =>{
      if(place)
        return res.status(400).json({ message: 'The place already exists' })
      const thePlace = new Place({
        id,
        latitude,
        longitude
      })
      return thePlace.save()
      .then(place =>{ res.status(200).json(place) })
    })
    .catch(e => {res.status(400).json(e)
    })
  },

  createRoute: (req, res, next) => {
    // const userId = req.params.id;
    const {userId, routeName} = req.body

    Route.findOne({ name:routeName }).exec()

    .then(route =>{
      if(route)
        return res.status(400).json({ message: 'The route already exists' })

      const theRoute = new Route({
        name:routeName,
        userID: userId,
        // city: String,
        // options: Array,
        // schedule: String,
        // price: Array
      })
      theRoute.save()
      .then(route =>{
        res.status(200).json({route}) })
    })
    .catch(e => {res.status(400).json(e)
    })
  },

  // 
  // createBarsRoute: (req, res, next) => {
  //   // const userId = req.params.id;
  //   const {routeId, placesId} = req.body
  //
  //   const theBarsroute = new Barsroute({
  //     routeId,
  //     placesId
  //   })
  //   theBarsroute.save()
  //   .then(route =>{res.status(200).json({route}) })
  //   .catch(e => {res.status(400).json(e)})
  //
  // },

}
