const mongoose = require('mongoose');
const User = require('../models/user.model');
const Contact = require('../models/contact.model')
const { sendActivationEmail } = require('../config/mailer.config');
const passport = require('passport');
const flash = require('connect-flash')

module.exports.register = (req, res, next) => {
    res.render('users/register')
}

module.exports.doRegister = (req, res, next) => {
    function renderWithErrors(errors) {
        res.status(400).render('users/register', {
            errors: errors,
            user: req.body,
        });
    }

    User.findOne({ email: req.body.email })
        .then((user) => {
            if (user) {
                renderWithErrors({
                    errors: 'This email is already registered',
                });
            } else {
                const {name, email, password, repeatPassword} = req.body
                if (password === repeatPassword){
                    User.create({name, email, password})
                        .then((u) => {
                           sendActivationEmail(u.email, u.activationToken);
                           req.flash('flashMessage','Your registration was successful')
                           res.redirect('/');
                          
                        })
                        .catch((e) => {
                            if (e instanceof mongoose.Error.ValidationError) {
                                renderWithErrors(e.errors);
                            } else {
                                 next(e);
                            }
                        });
                }else{
                    renderWithErrors({
                        errors: 'Passwords are not same',
                    });
                }
            }
        })
        .catch((e) => next(e));
}

module.exports.login = (req, res, next) => {
    res.render('users/login')
}

module.exports.doLogin = (req, res, next) => {
   passport.authenticate('local-auth', (error, user, validations) => {
       if(error){
           next(error)
       }else if(!user){
            res.status(400).render('users/login', {user: req.body, error: validations.error})
       }else{
           req.login(user, loginErr => {
               if (loginErr) next(loginErr)
               else res.redirect('/')
           })
       }
   })(req, res, next);
}

module.exports.doLoginGoogle = (req, res, next) => {
    passport.authenticate('google-auth', (error, user, validations) => {
      if (error) {
        next(error);
      } else if (!user) {
            res.status(400).render('users/login', { user: req.body, error: validations });
      } else {
            req.login(user, loginErr => {
                if (loginErr) next(loginErr)
                else res.redirect('/')
        })
      }
    })(req, res, next)
  }

module.exports.activate = (req, res, next) => {
    User.findOneAndUpdate(
        { activationToken: req.params.token, active: false },
        { active: true, activationToken: 'active' }
    )
        .then((u) => {
            if (u) {
                res.render('users/login', { user: req.body, message: 'Your account is activated' })
            } else {
                res.redirect('/')
            }
        })
        .catch((e) => next(e));
}

module.exports.profile = (req, res, next) => {
    res.render('users/profile')
    
    
}

module.exports.editProfile = (req,res,next) =>{
    res.render('users/editProfile')
}

module.exports.doEditProfile = (req, res, next) => {
    
    if(req.file){
        req.body.image = req.file.path
    }

    User.findByIdAndUpdate(req.currentUser.id, req.body,
      {
        safe: true,
        upsert: true,
        new: true,
      })
      .then(user => {
        if (!user) {
          next(createError(404, 'User not found'));
        } else {
          res.redirect('/profile')
        }})
        .catch(error =>{
            console.log(error)
            next(error)
        } );
  }

  module.exports.contact = (req, res, next) => {
    res.render('users/contact')
}

module.exports.doContact = (req, res, next) => {
    const {name, email,phone,message } = req.body
   

    Contact.create({name,email, phone,message})
        .then((r) => {
            req.flash('flashMessage','we will contact you as soon as possible.!')
            res.redirect('/')
            console.log('Contact created', r)
        })
        .catch((e) => {
            console.log(e)
            next(e)
        });
}

module.exports.logout = (req, res, next) => {
    req.session.destroy()
    res.redirect('/')
}

