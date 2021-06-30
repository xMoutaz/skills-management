const express = require('express');
var router = express.Router();
var logger = require('../middleware/logger-middelware');


router.get('/', logger ,async(req, resp) => {
    console.log('test');
    resp.status(200).send('WELCOME TO THIS PAGE');
})

module.exports = router