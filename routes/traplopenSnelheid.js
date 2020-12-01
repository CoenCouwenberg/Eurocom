const express = require('express');
const router = express.Router();
const TraplopenSnelheid = require('../models/TraplopenSnelheid');

// Gets back all the STAANNN
router.get('/', async (req, res) => {
	var limit = req.headers.limit || 31;
	try {
		const traplopenSnelheid = await TraplopenSnelheid.find().limit(parseInt(limit));
		res.json(traplopenSnelheid);
		// console.log(staanSnelheid);
	} catch(err) {
		res.json({message:err});
	}
	// res.send('We are on posts');
});

// Submits a postt
router.post('/', async (req, res) => {
	const traplopenSnelheid = new TraplopenSnelheid({
		snelheid: req.body.snelheid,
		date: req.body.date
	});

	try {
		const savedTraplopenSnelheid = await traplopenSnelheid.save();
		res.json(savedTraplopenSnelheid);
	} catch (err) {
		res.json({ message: err});
	}
});

module.exports = router;