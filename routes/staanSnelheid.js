const express = require('express');
const router = express.Router();
const StaanSnelheid = require('../models/StaanSnelheid');

// Gets back all the STAANNN
router.get('/', async (req, res) => {
	var limit = req.headers.limit || 31;
	try {
		const staanSnelheid = await StaanSnelheid.find().limit(parseInt(limit));
		res.json(staanSnelheid);
		// console.log(staanSnelheid);
	} catch(err) {
		res.json({message:err});
	}
	// res.send('We are on posts');
});

// Submits a postt
router.post('/', async (req, res) => {
	const staanSnelheid = new StaanSnelheid({
		snelheid: req.body.snelheid,
		date: req.body.date
	});

	try {
		const savedStaanSnelheid = await staanSnelheid.save();
		res.json(savedStaanSnelheid);
	} catch (err) {
		res.json({ message: err});
	}
});

module.exports = router;