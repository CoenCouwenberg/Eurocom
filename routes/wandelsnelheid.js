const express = require('express');
const router = express.Router();
const Wandelsnelheid = require('../models/Wandelsnelheid');

// Gets back all the WANDELSNELHEIIIDDDDD
router.get('/', async (req, res) => {
	var limit = req.headers.limit || 31;
	try {
		const wandelsnelheid = await Wandelsnelheid.find().limit(parseInt(limit));
		res.json(wandelsnelheid);
		// console.log(stappentellers);
	} catch(err) {
		res.json({message:err});
	}
	// res.send('We are on posts');
});

// Submits a postt
router.post('/', async (req, res) => {
	// console.log(req.body);
	const wandelsnelheid = new Wandelsnelheid({
		snelheid: req.body.snelheid,
		tijd: req.body.tijd
	});

	try {
		const savedStappen = await wandelsnelheid.save();
		res.json(savedStappen);
	} catch (err) {
		res.json({ message: err});
	}
});

module.exports = router;