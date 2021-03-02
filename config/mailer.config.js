const nodemailer = require('nodemailer')
const { generateTemplate } = require('./mailtemplate.js')
const { reserveTemplate } = require('./reserve.template.js')

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.NM_USER,
        pass: process.env.NM_PASSWORD
    }
})

module.exports.sendActivationEmail = (email, token) => {
    transporter.sendMail({
        from: `"IronLuxury" <${process.env.NM_USER}>`,
        to: email,
        subject: 'Thanks for joining us!',
        html: generateTemplate(email, token)
    })
}

module.exports.sendRent = (email) => {
    transporter.sendMail({
        from: `"IronLuxury" <${process.env.NM_USER}>`,
        to: email,
        subject: 'Your reserve has been successfully completed!',
        html: reserveTemplate(email)
    })
}