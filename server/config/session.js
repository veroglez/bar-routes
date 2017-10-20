const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const mongoose = require('mongoose')
const passport = require('passport')


module.exports = function (app){
  app.use(session({
    secret: 'angular auth passport secret shh',
    resave: true,
    saveUninitialized: true,
    cookie : { httpOnly: true, maxAge: 60*60*24*365 },
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  }))
  app.use(passport.initialize())
  app.use(passport.session())
}
