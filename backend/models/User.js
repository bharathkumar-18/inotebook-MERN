//Import mongoose
const mongoose = require('mongoose');

//Import Schema to make mongoose understand to put data into MongoDB
const { Schema } = mongoose;

//Create a schema to store your data
const UserSchema = new Schema({
    personname:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    timestamp:{
        type: Date,
        default: Date.now,
    }
  });

  //Export the module schema
  module.exports = mongoose.model('user',UserSchema);