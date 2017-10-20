const Place = require('../models/Place')
const Route = require('../models/Route')
const Barsroute = require('../models/Barsroute')
const path = require('path')
const mongoose = require('mongoose')

module.exports = {
  createPlace: (req, res, next) => {
    const {name, routeId, placeId, latitude, longitude, photos, mapPlaceId} = req.body
    Place.findOne({id:placeId}).exec().then(place =>{
      if(place){
        Barsroute.findOne({routeId:routeId}).then( res => {
          res.places.push(place._id)
          return res.save()
        })
        return res.status(200).json(place)
      }

      const thePlace = new Place({
        id:placeId,
        name: name,
        latitude,
        longitude,
        photos,
        mapPlaceId
      })
      thePlace.save().then(place =>{
        Barsroute.findOne({routeId:routeId}).then( res => {
          res.places.push(place._id)
          return res.save()
        }).then(() => {
          return res.status(200).json(place)
        })
      })
    })
    .catch(e => res.status(400).json(e))
  },

  createRoute: (req, res, next) => {
    const {userId, routeName, routeGenre, priceRange, schedule, city, description} = req.body

    Route.findOne({ name:routeName }).exec().then(route =>{
      if(route)
        return res.status(400).json({ message: 'The route already exists' })

      const theRoute = new Route({
        name:routeName,
        userID: userId,
        genre: routeGenre,
        priceRange: priceRange,
        schedule:schedule,
        city: city,
        description: description
      })
      theRoute.save().then(route =>{
        const theBarsroute = new Barsroute({
          userId:userId,
          routeId:route._id,
        })
        theBarsroute.save().then( br =>{
          res.status(200).json(br)
        })
      })
    })
    .catch(e => {res.status(400).json(e) })
  },

  showAllRoutes: (req, res, next) => {
    Barsroute.find().populate('places routeId').exec().then( barRoute => {
      return res.status(200).json(barRoute)
    })
  },

  getRoute: (req, res, next) => {
    Barsroute.findById(req.params.id).populate('places routeId')
    .then( barsroute => res.json(barsroute) )
    .catch( err => res.json(err).status(500))
  },

  deletePlaces: (req, res, next) => {
    const { barsrouteId, placeId } = req.body
    Barsroute.findByIdAndUpdate( barsrouteId, {$pull:{"places": placeId}}, {new: true})
    .then( barRoute => {res.json( {barRoute: barRoute} )})
    .catch(e => {res.status(400).json(e) })
  },

  deleteRoutes: (req, res, next) => {
    const { barsrouteId, routeId } = req.body
    Barsroute.findByIdAndRemove( barsrouteId )
    .then( barRoute => {
      Route.findByIdAndRemove ( routeId )
      .then( route => res.json( {barRoute: barRoute} ) )
    })
    .catch(e => {res.status(400).json(e) })
  },

  searchRoutes: (req, res, next) => {
    const { city, schedule, routegenre, pricerange } = req.body

    Route.find( { $and:[ {'city':city}, {'schedule':schedule} ]} )
      .then( barRoute => {
        if(barRoute.length === 0 ){
          Route.find( { $or:[ {'city':city}, {'schedule':schedule}, {'routegenre':routegenre}, {'pricerange':pricerange} ]} )
          .populate('places routeId')
          .then( routes => searchBarroutes(routes))
          .catch(e => { res.status(400).json(e) })
        } else {
          searchBarroutes(barRoute)
        }
     })
    .catch(err => next(err))

    searchBarroutes = function (routes){
      const misplaces = []
      for(let i = 0; i<routes.length; i++){
        let pleis = routes[i]._id
        misplaces.push(String(pleis))
      }
      Barsroute.find( {'routeId': {$in: misplaces}} ).populate('places routeId')
      .then(barsroute => {
        return res.status(200).json(barsroute)
      })
    }
  }



}
