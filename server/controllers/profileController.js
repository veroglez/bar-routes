const User = require('../models/User')
// const multer = require('multer')
const bcrypt = require('bcrypt')
const path = require('path')
const destination = path.join(__dirname, "../public/avatar/")
// const upload = multer({dest : destination})


module.exports = {
  editProfile: (req, res, next) => {
    const userId = req.params.id
    const {username, email, password} = req.body;

    const hashPass = bcrypt.hashSync(password, bcrypt.genSaltSync(10))

    const updateObject = {
  		username,
  		email,
  		password: hashPass
  	}
    User.findByIdAndUpdate(userId, { $set: updateObject }, {new: true})
    .then( user => res.json({  user: user }) )
    .catch( err => res.status(400).json({  error: err }) )
  },
}
