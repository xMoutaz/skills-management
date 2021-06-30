const express = require('express');
const cors = require('cors');
const Welcome = require('../controllers/welcome-controller');
const User = require('../controllers/user-controller');


module.exports = function (app) {
    app.use(cors());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use('/welcome', Welcome);
    app.use('/users', User);
}