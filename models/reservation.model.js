const mongoose = require('mongoose')
const Car = require('./car.model')
const User = require('./user.model')
const EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PHONE_PATTERN = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

const reservationScheme = new mongoose.Schema(
    {
    name: {
        type: String,
        trim: true,
        require:true
    },
    email: {
        type: String,
        required: 'The email is mandatory',
        lowercase: true,
        match: [EMAIL_PATTERN, 'Invalid email address'],
        trim: true
    },
    dateReserve: {
        type:Date,
        require:true
    },
    phone:{
        type:Number,
        require:true,
        match: [PHONE_PATTERN, 'Your Phone Number does not meet the reqyurements']
    },    
    user:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required: true,
    },
    car:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Car',
        required: true,
    },
    },
    {
    timestamps: true,
    toJSON: {
        virtuals: true,
    }}
)

const Reservation = mongoose.model('Reservation', reservationScheme)
module.exports = Reservation