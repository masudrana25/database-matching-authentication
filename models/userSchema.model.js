const mongoose = require('mongoose');

const User_Schema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  Created_time: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model('User', User_Schema);