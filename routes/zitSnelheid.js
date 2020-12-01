const express = require('express');
const router = express.Router();
const ZitSnelheid = require('../models/ZitSnelheid');

// Gets back ZITTENNNNN
router.get('/', async (req, res) => {
	var limit = req.headers.limit || 31;
	try {
		const zitSnelheid = await ZitSnelheid.find().limit(parseInt(limit));
		res.json(zitSnelheid);
		// console.log(stappentellers);
	} catch(err) {
		res.json({message:err});
	}
	// res.send('We are on posts');
});

// Submits a postt
router.post('/', async (req, res) => {
	// console.log(req.body);
	const zitSnelheid = new ZitSnelheid({
		zitSnelheid: req.body.zitSnelheid,
		date: req.body.date
	});

	try {
		const savedZitSnelheid = await zitSnelheid.save();
		res.json(savedZitSnelheid);
	} catch (err) {
		res.json({ message: err});
	}
});

module.exports = router;