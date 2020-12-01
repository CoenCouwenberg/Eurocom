const express = require('express');
const router = express.Router();
const Staan = require('../models/Staan');

// Gets back all the STAANNN
router.get('/', async (req, res) => {
	var limit = req.headers.limit || 31;
	try {
		const staan = await Staan.find().limit(parseInt(limit));
		res.json(staan);
		console.log(staan);
	} catch(err) {
		res.json({message:err});
	}
	// res.send('We are on posts');
});

// Submits a postt
router.post('/', async (req, res) => {
	// console.log(staan);
	const staan = new Staan({
		aantal: req.body.aantal,
		date: req.body.date
	});

	try {
		const savedStaan = await staan.save();
		res.json(savedStaan);
	} catch (err) {
		res.json({ message: err});
	}
});

module.exports = router;