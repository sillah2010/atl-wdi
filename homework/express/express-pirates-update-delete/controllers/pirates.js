const express = require("express");
const router = express.Router();
const pirates = require('../models/pirates.js');

//index
router.get("/", (req, res) => {
	res.render('pirates/index', {
		pirates: pirates
	});
})

//new pirate
router.get('/new', (req, res) => {
	res.render('pirates/new')
})

//show pirate
router.get('/:id', (req, res) => {
	const id = parseInt(req.params.id);
	const pirate = pirates[id];
	res.render('pirates/show', {
		pirate: pirate
	})
})

//post
router.post('/', (req, res) => {
	const newPirate = {
		name: req.body.name,
		birthplace: req.body.birthplace,
		death_year: req.body.death_year,
		base: req.body.base,
		nickname: req.body.nickname
	}
	console.log(req.body)
	pirates.push(newPirate);

	res.redirect("/pirates");
})

//edit
router.get('/:id/edit', (req, res) => {
	const id = req.params.id
	const pirate = pirates[id]
	console.log(pirate);
	res.render('pirates/edit.hbs', {
		//Because the object 
		pirates: pirate,
		id: id
	})
})

//update
router.put('/:id', (req, res) => {
	const updatedPirate = pirates[req.params.id];
	updatedPirate.name = req.body.name;
	updatedPirate.birthplace = req.body.birthplace;
	updatedPirate.death_year = req.body.death_year;
	updatedPirate.base = req.body.base;
	updatedPirate.nickname = req.body.nickname;
	res.redirect(`/pirates/${req.params.id}`);
});

//delete
router.delete('/:id', (req, res) => {
	pirates.splice(req.params.id, 1);
	res.redirect('/pirates');
});


module.exports = router;