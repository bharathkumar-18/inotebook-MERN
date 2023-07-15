//Import mongoose
const mongoose = require('mongoose');
// Get MongoDB URI
const mongoURI = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.1";

// Connect to MongoDB
const connectToMongo = ()=>{
    mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

});
    //Handle connection events
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection error:'));
    db.once('open', () => {
      console.log('Connected to MongoDB');
    });
}


module.exports = connectToMongo;