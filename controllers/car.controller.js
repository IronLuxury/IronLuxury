const mongoose = require('mongoose');
const Car = require('../models/car.model')
const Reservation = require('../models/reservation.model')

const {sendRent} = require('../config/mailer.config')
const flash = require('connect-flash')

module.exports.rent = (req, res, next) => {
    Car.find({})
        .then((cars) => {
            res.render('cars/rent', {cars:cars})
        })
}

module.exports.detail = (req, res, next) => {
    Car.findById(req.params.id)
        .then((cars) => {
            res.render('cars/detail', cars)
        })
        .catch((e) => next(e))
}

module.exports.reserve = (req, res, next) => {
    res.render('cars/reservation', {id:req.params.id})
}

module.exports.doReserve = (req, res, next) => {
    const {dateReserve, phone } = req.body
    const carID = req.params.id
    const userID = req.currentUser.id
    const email = req.currentUser.email

    Reservation.create({dateReserve, phone, user:userID, car:carID})
        .then((r) => {
            sendRent(email)
            req.flash('flashMessage','Your reserve has been successfully completed!')
            res.redirect('/rent')
            console.log('Reservation created', r)
        })
        .catch((e) => {
            console.log(e)
            next(e)
        });
}