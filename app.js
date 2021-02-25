require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const logger = require("morgan");
const routes = require("./config/routes.js");
const hbs = require('hbs');
const passport = require('passport');
const session = require('./config/session.config');

require("./config/db.config");
require("./config/passport.config");

// Express config
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(logger("dev"));

// Session config
app.use(session)
app.use(passport.initialize())
app.use(passport.session())

// Hbs Config
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + '/views/partials')

// Session User
app.use((req, res, next) => {
    req.currentUser = req.user;
    res.locals.currentUser = req.user
    next()
})

app.use("/", routes);

app.use((req, res, next) => {
    next(createError(404));
});

app.use((error, req, res, next) => {
    if (!error.status) {
        error = createError(500);
    }
    res.status(error.status);
    res.render("error", error);
});

// Initialization on port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));