const express = require('express');
const db = require('./startup/dbConnection');
const app = express();
const PORT = process.env.PORT || 8081;
require('./startup/routes')(app);

db.connect()
    .then(() => {
        app.listen(PORT, () =>
            console.log('Server started at  port: ' + PORT));
    }).catch(err => console.log('Faild to connect to DB', err));
module.exports = app;