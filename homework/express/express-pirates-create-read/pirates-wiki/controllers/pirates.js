const express = require("express");
const router = express.Router();
const pirates = require('../models/pirates.js');

router.get("/", (req,res) => {
    res.render('pirates/index', {
        pirates: pirates 
    });    
})

router.get('/new', (req, res) => {
    res.render('pirates/new')
})

router.get('/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const pirate = pirates[id];
      res.render('pirates/show', {
          pirate: pirate
    })
})

module.exports = router;