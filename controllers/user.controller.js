const mongoose = require('mongoose')
const User = require('../models/user.model')
const { sendActivationEmail } = require('../config/mailer.config');

module.exports.register = (req, res, next) => {
    res.render('users/register')
}

module.exports.doRegister = (req, res, next) => {
    function renderWithErrors(errors) {
        console.log(errors)
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
                User.create(req.body)
                    .then((u) => {
                       sendActivationEmail(u.email, u.activationToken);
                       res.redirect('/');
                    })
                    .catch((e) => {
                        if (e instanceof mongoose.Error.ValidationError) {
                            renderWithErrors(e.errors);
                        } else {
                            next(e);
                        }
                    });
            }
        })
        .catch((e) => next(e));
}

module.exports.login = (req, res, next) => {
    res.render('users/login')
}

module.exports.doLogin = (req, res, next) => {
    function renderWithErrors(e) {
        res.render('users/login', {
            error: e || 'El correo o la contraseña no son correctas'
        })
    }
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
                res.redirect("/")
            }
        })
        .catch((e) => next(e));
}