const mongoose = require('mongoose');
// Defines all the different properties that MongoDB records
// may have - curtailes ability to have structureless records
const { Schema } = mongoose; // destructuring - same as: const Schema = mongoose.Schema

const userSchema = new Schema({
	googleId: String
});

// Creating Users collection in MongoDB
// - creates it only if it does not exist 
mongoose.model('users', userSchema);