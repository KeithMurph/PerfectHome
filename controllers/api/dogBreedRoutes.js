const express = require('express');
const router = express.Router();
const db = require('../../models');
const Breed = require('../../models/Breed')
const { route } = require('./findAnimalsRoutes');

//get all dog breeds
router.get("/", (req,res) => {
    db.Breed.findAll().then(breeds=>{
        res.json(breeds)
    }).catch(err=>{
        console.log(err);
        res.status(500).json(err);
    })
})



module.exports = router