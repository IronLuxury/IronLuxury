const mongoose = require('mongoose');
const Car = require('../models/car.model')

module.exports.rent = (req, res, next) => {
    Car.find({})
        .then((cars) => {
           // console.log(cars)
            res.render('cars/rent', {cars:cars})
        })
}

module.exports.detail = (req, res, next) => {
    console.log(req.params)
    Car.findById(req.params.id)
        .then((cars) => {
            res.render('cars/detail', cars)
        })
        .catch((e) => next(e))
}