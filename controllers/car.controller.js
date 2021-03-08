const mongoose = require('mongoose');
const Car = require('../models/car.model')
const Reservation = require('../models/reservation.model')
const {sendRent} = require('../config/mailer.config')
const flash = require('connect-flash')
const models = ['Lamborghini', 'Maserati', 'Mercedes', 'Porsche', 'Jaguar', 'Ferrari', 'Bugatti', 'BMW', 'Bentley', 'Audi', 'Aston Martin']

module.exports.rent = (req, res, next) => {
    Car.find({})
        .then((cars) => {
            res.render('cars/rent', {cars:cars, models})
        })
}

module.exports.filterCar = (req, res, next) => {
    const filter = req.query.brand
    const order = req.query.price
    
    if(!filter){
        res.redirect('/rent')
    }else{
        Car.find({brand:filter}).sort({price:order})
            .then((cars) => {
                res.render('cars/rent', { cars:cars, models})
            })
            .catch((e) => {
                next(e)
            })
    }

}

module.exports.detail = (req, res, next) => {
    Car.findById(req.params.id)
        .then((cars) => {
            res.render('cars/detail', cars)
        })
        .catch((e) => next(e))
}

module.exports.doReserve = (req, res, next) => {
    const {name, email, dateReserve, phone } = req.body
    console.log(req.body)
    const carID = req.params.id
    const userID = req.currentUser.id
    const email_template = req.currentUser.email

    Reservation.create({name, email, dateReserve, phone, user:userID, car:carID})
        .then((r) => {
            sendRent(email_template)
            req.flash('flashMessage','Your reserve has been successfully completed!')
            res.redirect('/rent')
            console.log('Reservation created', r)
        })
        .catch((e) => {
            console.log(e)
            next(e)
        });
}