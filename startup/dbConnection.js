const mongoose = require('mongoose');


function connect() {
  return new Promise((resolve, reject) => {
      console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
      const connection =mongoose.connect('mongodb+srv://xMoutaz:moutaz1@cluster0-15tjf.mongodb.net/test1', { useNewUrlParser: true, useUnifiedTopology: true})
          .then((res, err) => {
            if (err) return reject(err);
            resolve();
          })
  });
}

function close() {
  return mongoose.disconnect();
}

module.exports = { connect, close };
