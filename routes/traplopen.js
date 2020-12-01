const express = require('express');
const router = express.Router();
const Traplopen = require('../models/Traplopen');

// Gets back all the STAANNN
router.get('/', async (req, res) => {
	var limit = req.headers.limit || 31;
	try {
		const traplopen = await Traplopen.find().limit(parseInt(limit));
		res.json(traplopen);
		// console.log(traplopen);
	} catch(err) {
		res.json({message:err});
	}
	// res.send('We are on posts');
});

// Submits a postt
router.post('/', async (req, res) => {
	// console.log(staan);
	const traplopen = new Traplopen({
		aantal: req.body.aantal,
		date: req.body.date
	});

	try {
		const savedTraplopen = await traplopen.save();
		res.json(savedTraplopen);
	} catch (err) {
		res.json({ message: err});
	}
});

module.exports = router;