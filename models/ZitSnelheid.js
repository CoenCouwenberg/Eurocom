const mongoose = require('mongoose');

const zitSnelheidSchema = mongoose.Schema({
	zitSnelheid: {
		type: Number,
		required: true
	},
	date: {
		type: String
	}
});

module.exports = mongoose.model('ZitSnelheid', zitSnelheidSchema, "ZitSnelheid");