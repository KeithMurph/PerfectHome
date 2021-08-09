const express = require('express');
const router = express.Router();
const db = require('../../models');
const {Adoptable} = require('../../models/')

router.get("/" ,(req,res)=>{
    db.Adoptable.findAll().then(data => {
        res.json(data)
    })
    
})


module.exports = router