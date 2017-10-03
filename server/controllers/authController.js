const express = require('express')
const passport = require('passport')
const path = require('path')
const User = require('../models/User')
const bcrypt = require('bcrypt')
const debug = require('debug')("angularauth:"+path.basename(__filename).split('.')[0])


module.exports = {
  getUsers: (req, res, next) => {
    User.find({})
    .then( users => res.json(users) )
    .catch( err => res.json(err).status(500) )
  },

  getSingleUser: (req, res, next) => {
    User.findById(req.params.id)
    .then( user => res.json(user) )
    .catch( err => res.json(err).status(500))
  },

  signup: (req, res, next) => {
    const {username, password, email} = req.body

    if (!username || !password || !email)
      return res.status(400).json({ message: 'Provide username and password' })

    debug('Find user in DB')

    User.findOne({ username },'_id').exec()
    .then(user =>{
      if(user)
        return res.status(400).json({ message: 'The username already exists' })

      const salt     = bcrypt.genSaltSync(10)
      const hashPass = bcrypt.hashSync(password, salt)
      debug('creating user')
      const theUser = new User({
        username,
        password: hashPass,
        email
      })
      return theUser.save()
      .then(user =>{
        req.login(user, (err) => {
          if (err)
            return res.status(500).json({ message: 'Something went wrong' })

          res.status(200).json(req.user)
        })
      })
    })
    .catch(e => {
      console.log(e)
      res.status(400).json({ message: 'Something went wrong' })
    })
  },

  login: (req, res, next) => {
    passport.authenticate('local', (err, user, failureDetails) => {
      if (err)
        return res.status(500).json({ message: 'Something went wrong' })

      if (!user)
        return res.status(401).json(failureDetails)

      req.login(user, (err) => {
        if (err)
          return res.status(500).json({ message: 'Something went wrong' })

        res.status(200).json(req.user)
      })
    })(req, res, next)
  },

  logout: (req, res, next) => {
    req.logout();
    res.status(200).json({ message: 'Success' });
  },

  loggedIn: (req, res, next) => {
    if (req.isAuthenticated())
      return res.status(200).json(req.user);
    res.status(403).json({ message: 'Unauthorized' });
  },

}
