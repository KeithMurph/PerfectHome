const express = require('express');
const router = express.Router();
const db = require('../../models');
const { route } = require('./findAnimalsRoutes');
// const myHeader = new Headers({
//     "x-api-key":"process.env.DOG_API_KEY"
// })

// fetch("https://api.thedogapi.com/v1/breeds?limit=275&page=0")
// .then(response=> response.json()).then(data => console.log(data))

//get all dog breeds
router.get("/breeds", (req,res) => {
    db.Breed.findAll().then(breeds=>{
        res.json(breeds)
    }).catch(err=>{
        console.log(err);
        res.status(500).json(err);
    })
})

//get dog breed by name

router.get("/breeds/:breed",(req,res)=> {
    db.Breed.findByPk(req.params.breed).then(breed=>{
        res.json(breed);
    }).catch(err=>{
        console.log(err);
        res.status(500).json({message:"No breed found!"})
    })
})



module.exports = router