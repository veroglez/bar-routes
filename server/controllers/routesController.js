const Place = require('../models/Place')
const path = require('path')

module.exports = {
  createRoute: (req, res, next) => {
    const {id, latitude, longitude} = req.body

    Place.findOne({ id },'id').exec()
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
}
