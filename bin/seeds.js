require('dotenv').config()
require("../config/db.config");
const mongoose = require('mongoose')
const Car = require('../models/car.model')
const cars = require('../data/cars')

Promise.all([Car.deleteMany()])
    .then(() => {
        Car.insertMany(cars)
    })
    .then(console.log(`Cars added successfully`))
    .catch(e => console.log(e))
