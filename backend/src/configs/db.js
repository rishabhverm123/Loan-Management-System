const mongoose=require('mongoose');
const uri = 'mongodb://localhost:27017/LoansManager';

// Connect to MongoDB
console.log("MONGO_URI",uri)
mongoose.connect(uri);

// Get the default connection
const db = mongoose.connection; 

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Once the connection is open, you can perform database operations
db.once('open', function() {
  console.log('Connected successfully to MongoDB');
  // Perform database operations here
});