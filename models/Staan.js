const mongoose = require('mongoose');

// Staan Schema
const staanSchema = mongoose.Schema({
	aantal: {
		type: Number,
		required: true
	},
	date: {
		type: String
	}
});

module.exports = mongoose.model('Staan', staanSchema, "Staan");