const mongoose = require('mongoose');

const User = mongoose.model('User',{
     name: {
          type: String,
          required: false
     },
     skills: {
        type:  [String]
   },
     updatedAt: {
          type: Date,
          default: Date.now()
   },
});

module.exports = User;