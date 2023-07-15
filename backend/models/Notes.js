//Import mongoose
const mongoose = require('mongoose');

//Create a schema to store your data
const NotesSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    tag:{
        type: String,
        default: "General",
    },
    timestamp:{
        type: Date,
        default: Date.now,
    }
  });

  //Export the module schema
  module.exports = mongoose.model('notes',UserSchema);