const mongoose = require('mongoose');

const staanSnelheidSchema = mongoose.Schema({
	snelheid: {
		type: Number,
		required: true
	},
	date: {
		type: String
	}
});

module.exports = mongoose.model('StaanSnelheid', staanSnelheidSchema, "StaanSnelheid");