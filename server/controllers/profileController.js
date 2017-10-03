const User = require('../models/User')
// const multer = require('multer')
const path = require('path')
const destination = path.join(__dirname, "../public/avatar/")
// const upload = multer({dest : destination})


module.exports = {
  editProfile: (req, res, next) => {
    const userId = req.params.id
    const {username, email, password} = req.body;
    const updateObject = {
  		username,
  		email,
  		password
  	}
    User.findByIdAndUpdate(userId, { $set: updateObject })
    .then( user => res.json({ message: 'user successfully updated', user: user }) )
    .catch( err => res.status(400).json({ message: 'Unable to update user', error: err }) )
  },

// module.exports = {
//   profileGet: (req, res, next) => {
//     const userId = req.params.id
//     User.findById(userId)
//     .then( user => {
//       Product.find({'user_id':userId})
//       .then( response => {
//         if(req.user){
//           Match.find({ 'product_user_id': req.user._id, 'user_id': userId})
//           .then(matches => {
//             return res.render('profile/dasboard',{subtitle:'My products',userOwner: user, products: response, notifications:matches})
//           })
//         }else{
//           return res.render('profile/dasboard',{subtitle:'My products',userOwner: user, products: response, notifications:[] })
//         }
//       })
//     })
//     .catch( err => next(err) )
//   },

  // editProfileGet: (req, res, next) => {
  //   const userId = req.params.id
  //   if(userId == req.user._id){
  //     User.findById(userId)
  //     .then( response => res.render('profile/user_edit', { titleE:'Edit profile', userOwner: response } ) )
  //     .catch( err => next(err) )
  //   }else{
  //     res.redirect(`/profile/${userId}`)
  //   }
  // },

  // editProfilePost: (req, res, next) => {
  //   const userId = req.params.id
  //   if(userId == req.user._id){
  //     const updates = {
  //       first_name: req.body.first_name,
  //       last_name: req.body.last_name,
  //       username: req.body.username,
  //       email: req.body.email,
  //       phone: req.body.phone,
  //       avatar: `/avatar/${req.file.filename}`
  //     }
  //     User.findByIdAndUpdate(userId, updates)
  //     .then( response => res.redirect(`/profile/${userId}`))
  //     .catch( err => next(err))
  //   }else{
  //     res.redirect(`/profile/${userId}`)
  //   }
  // }

}
