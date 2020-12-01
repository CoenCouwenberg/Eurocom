const mongoose = require('mongoose');

const traplopenSnelheidSchema = mongoose.Schema({
	snelheid: {
		type: Number,
		required: true
	},
	date: {
		type: String
	}
});

module.exports = mongoose.model('traplopenSnelheid', traplopenSnelheidSchema, "traplopenSnelheid");