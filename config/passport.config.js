const passport = require('passport')
const mongoose = require('mongoose')
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const User = require('../models/user.model')
const Reservation = require('../models/reservation.model')

passport.serializeUser((user, next) => {
    next(null, user.id)
})

passport.deserializeUser((id, next) => {
    User.findById(id)
      .populate({
        path: 'reservations',
        populate:{
          path: 'car'
        }
      })
        .then((user) => {
            next(null, user)
        })
        .catch(next)
})

passport.use('local-auth', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, (email, password, next) => {
    User.findOne({email:email})
        .then(user =>{
            if(!user){
                next(null, false, { error: 'El correo o la contraseña no son correctas'})
            }else{
                return user.checkPassword(password)
                    .then(match => {
                        if(match){
                            if(user.active){
                                next(null, user)
                            }else{
                                next(null, false, { error: 'Tienes que activar tu cuenta'})
                            }
                        }else{
                            next(null, false, { error: 'El correo o la contraseña no son correctas' })
                        }
                    })
            }
        })
        .catch(next)
}))

passport.use('google-auth', new GoogleStrategy({
    clientID: process.env.G_CLIENT_ID,
    clientSecret: process.env.G_CLIENT_SECRET,
    callbackURL: process.env.G_REDIRECT_URI || '/authenticate/google/cb'
  }, (accessToken, refreshToken, profile, next) => {
    const googleID = profile.id
    const email = profile.emails[0] ? profile.emails[0].value : undefined;
    const name = profile.displayName
    const image = profile.photos[0].value
  
    if (googleID && email) {
      User.findOne({ $or: [
        { email: email },
        { 'social.google': googleID }
      ]})
      .then(user => {
        if (!user) {
          const newUserInstance = new User({
            name,
            email,
            password: 'Aa1' + mongoose.Types.ObjectId(),
            image,
            social: {
              google: googleID
            },
            active: true
          })
  
          return newUserInstance.save()
            .then(newUser => next(null, newUser))
        } else {
          next(null, user)
        }
      })
      .catch((error)=>{
        next(error)
      })
    } else {
      next(null, null, { error: 'Error conectando con Google OAuth' })
    }
  }))