const mongoose = require('mongoose')
const User = require('../models/user.model')

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
                    message: 'This email is already registered',
                });
            } else {
                User.create(req.body)
                    .then((u) => {
                       // sendActivationEmail(u.email, u.activationToken);
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