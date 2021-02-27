const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_PATTERN = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
const SALT_ROUNDS = 11

const userSchema = new mongoose.Schema(
    {
    name: {
        type: String,
        required: 'The name is mandatory',
        trim: true
    },
    email: {
        type: String,
        required: 'The email is mandatory',
        lowercase: true,
        match: [EMAIL_PATTERN, 'Invalid email address'],
        trim: true
    },
    password: {
        type: String,
        required: 'The password is mandatory',
        unique: true,
        match: [PASSWORD_PATTERN, "Your password does not meet the requirements"]
    },
    phone:{
        type:String,
        required : 'The phone number is mandatory'
        //TODO match regex of phone
    },
    active: {
        type: Boolean,
        default: false
    },
    activationToken: {
        type: String,
        unique: true,
        default: () => {
            return (
                Math.random().toString(36).substring(2, 15) +
                Math.random().toString(36).substring(2, 15) +
                Math.random().toString(36).substring(2, 15) +
                Math.random().toString(36).substring(2, 15)
            );
        }
    },
})
userSchema.methods.checkPassword = function(passwordToCheck) {
    return bcrypt.compare(passwordToCheck, this.password);
};
userSchema.pre('save', function(next) {
    //user = this.
    if (this.isModified('password')) {
        bcrypt.hash(this.password, SALT_ROUNDS)
            .then(hash => {
                this.password = hash
                next()
            })
    } else {
        next()
    }
})
const User = mongoose.model('User', userSchema)
module.exports = User;