const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user.model')

passport.serializeUser((user, next) => {
    next(null, user.id)
})

passport.deserializeUser((id, next) => {
    User.findById(id)
        /*EJ SI QUIERES SACAR LOS POST DEL USUARIO
        Populate
        */
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