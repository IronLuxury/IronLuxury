const Car = require('../models/car.model')

module.exports.home = (req, res, next) => {
    Car.find({})
        .then((cars) => {
            console.log(cars)

            res.render('index', {cars:cars.slice(0,3)})
        })
        .catch((e) => next(e))
}