const Place = require('../models/Place')
const Route = require('../models/Route')
const Barsroute = require('../models/Barsroute')
const path = require('path')

module.exports = {
  createPlace: (req, res, next) => {
    const {name, routeId, placeId, latitude, longitude} = req.body

    Place.findOne({id:placeId}).exec().then(place =>{
      if(place){
        console.log('estoy retornando', place)
        Barsroute.findOne({routeId:routeId}).then( res => {
          res.places.push(place._id)
        })
        return res.status(200).json(place)
      }
        // return res.status(400).json({ message: 'The place already exists' })


      const thePlace = new Place({
        id:placeId,
        name: name,
        latitude,
        longitude
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
          res.status(200).json(br);
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

  // showNewPlaces: (req, res, next) => {
  //   Barsroute.find({ }).exec().then( barRoute => {
  //     return res.status(200).json(barRoute)
  //   })
  // },


  deletePlaces: (req, res, next) => {
    const {barsrouteId, placeId} = req.body
    Barsroute.findByIdAndUpdate( barsrouteId, {$pull:{"places": placeId}}, {new: true})
    .then( barRoute => {res.json( {barRoute: barRoute} )})
    .catch(e => {res.status(400).json(e) })
  },

  searchRoutes: (req, res, next) => {
    const {city, schedule, routegenre, pricerange} = req.body

    console.log(city, schedule, routegenre, pricerange)




    Route.find( { $and:[ {'city':city}, {'schedule':schedule}]} )
    .then( barRoute => {
      console.log(barRoute)
      if(barRoute.length === 0 ){
        Route.find( { $or:[ {'city':city} ]} )
        .then( res => {
          console.log(res)
          console.log('No ha encontrado nada, te muestro todo')
          return res.json( {res: res} )
        })
       }

       return res.json( {barRoute: barRoute} )
     })
    .catch(err => next(err))

    // Barsroute.find( { "routeId.city": { $regex: city, $options: 'i' } })
    // .then( barRoute => {
    //   console.log(barRoute)
    //   res.json( {barRoute: barRoute} )} )
    // // .then(response => { res.render('index', {products: response, subtitle: 'Products', banner:false  }) })
    // .catch(err => next(err))
  }

}
