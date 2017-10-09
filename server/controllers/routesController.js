const Place = require('../models/Place')
const Route = require('../models/Route')
const Barsroute = require('../models/Barsroute')
const path = require('path')

module.exports = {
  createPlace: (req, res, next) => {
    const {name, routeId, placeId, latitude, longitude} = req.body
    console.log('Esta es el id de la ruta que busco', routeId)

    Place.findOne({id:placeId}).exec().then(place =>{
      if(place)
        return res.status(400).json({ message: 'The place already exists' })
      const thePlace = new Place({
        id:placeId,
        name: name,
        latitude,
        longitude
      })
      thePlace.save().then(place =>{
        res.status(200).json(place)
        console.log('place:',place)
        console.log('routeId:',routeId)

        Barsroute.findOne({routeId:routeId}).then( res => {
          console.log('route:',res)
          console.log(place.name)
          res.places.push(place._id)
          // res.placesId.push({placeName:place.name, placeId:place._id})
          res.save()
        })
      })
    })
    .catch(e => {res.status(400).json(e)
    })
  },

  createRoute: (req, res, next) => {
    const {userId, routeName} = req.body

    Route.findOne({ name:routeName }).exec().then(route =>{
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
      theRoute.save().then(route =>{
        res.status(200).json({route})
        const theBarsroute = new Barsroute({
          routeId:route._id,
        })
        theBarsroute.save().then(res =>{
          res.status(200).json({res})
        })
      })
    })
    .catch(e => {res.status(400).json(e)
    })
  },
  thisRouteIsForyouBaby: (req, res, next) => {
    Barsroute.find().populate('places routeId').exec().then( barRoute => {
      return res.status(200).json(barRoute)
    })
  }

}
