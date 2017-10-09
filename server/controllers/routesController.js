const Place = require('../models/Place')
const Route = require('../models/Route')
const Barsroute = require('../models/Barsroute')
const path = require('path')

module.exports = {
  createPlace: (req, res, next) => {
    const {name, placeId, latitude, longitude} = req.body

    Place.findOne({id:placeId}).exec()
    .then(place =>{
      if(place)
        return res.status(400).json({ message: 'The place already exists' })
      const thePlace = new Place({
        id:placeId,
        name: name,
        latitude,
        longitude
      })
      return thePlace.save()
      .then(place =>{
        res.status(200).json(place)

        console.log('place:',place)

      })
    })
    .catch(e => {res.status(400).json(e)
    })
  },

  createRoute: (req, res, next) => {
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
        res.status(200).json({route})
        const theBarsroute = new Barsroute({
          routeId:route._id,
        })
        theBarsroute.save()
          .then(res =>{res.status(200).json({res}) })
      })
    })
    .catch(e => {res.status(400).json(e)
    })
  },


}
