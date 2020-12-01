const mongoose = require('mongoose');

const traplopenSchema = mongoose.Schema({
	aantal: {
		type: Number,
		required: true
	},
	date: {
		type: String
	}
});

module.exports = mongoose.model('Traplopen', traplopenSchema, "Traplopen");