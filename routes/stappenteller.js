const express = require('express');
const router = express.Router();
const Stappenteller = require('../models/Stappenteller');

// Gets back all the STAPPENTELLELRRRRRRRRRRRERRRRRRRRRRRRRRRRRRR
// router.get('/', async (req, res) => {
// 	try {
// 		const stappentellers = await Stappenteller.find();
// 		res.json(stappentellers);
// 		// console.log(stappentellers);
// 	} catch(err) {
// 		res.json({message:err});
// 	}
// 	// res.send('We are on posts');
// });

router.get('/', async (req, res) => {
	var limit = req.headers.limit || 31;
	// console.log(req.headers.limit);
	// console.log(limit);
	try {
		const stappentellers = await Stappenteller.find().limit(parseInt(limit));
		res.json(stappentellers);
		// console.log(stappentellers);
	} catch(err) {
		res.json({message:err});
	}
	// res.send('We are on posts');
});

// De eerste 7 records terughalen (1 week)
router.get('/', async (req, res) => {
	db.collection("testData", function(err, collection){
		collection.find({}).limit(7).toArray(function(err, data){
			res.json(data);
	  })
	});
});

// Submits a post
router.post('/', async (req, res) => {
	// console.log(req.body);
	const stappentellers = new Stappenteller({
		date: req.body.date,
		aantal: req.body.aantal
	});
	console.log(stappentellers);

	try {
		const savedStappen = await stappentellers.save();
		res.json(savedStappen);
	} catch (err) {
		res.json({ message: err});
	}
});

// Specific post
router.get('/:stappenId', async (req, res) => {
	try {
		const stappenteller = await Stappenteller.findById(req.params.stappenId);
		res.json(stappenteller);
	} catch(err) {
		res.json({ message: err });
	}
});

// 5fbe6365cc2d1e5e1d57f043

// Delete Post
router.delete('/:stappenId', async (req, res) => {
	try {
		const removedStappen = await Stappenteller.deleteOne({ _id: req.params.stappenId });
		res.json(removedStappen);
	} catch (err) {
		res.json({  message: err});
	}
});

// Update Post
router.patch('/:stappenId', async (req, res) => {
	try {
		const updatedStappen = await Stappenteller.updateOne(
			{ _id: req.params.stappenId },
			{ $set: { aantal: req.body.aantal, date: req.body.date }}
		);
		res.json(updatedStappen);
	} catch (err) {
		res.json({ message: err });
	}
});

module.exports = router;