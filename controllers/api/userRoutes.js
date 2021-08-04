const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const db = require('../../models');

router.post("/create",(req,res)=>{
// req.body.password = bcrypt.hashSync(req.body.password,10)
    db.User.create(req.body).then(newUser=>{
        req.session.user = {
            id:newUser.id,
            username:newUser.username,
            email:newUser.email
        }
        res.json(newUser);
    }).catch(err=>{
        console.log(err);
        res.status(500).json(err);
    })
})

router.post("/login",(req,res)=>{
    db.User.findOne({
        where:{
            email:req.body.email
        }
    }).then(user=>{
        if(!user){
            res.status(403).json({
                message:"incorrect username or password"
            })
        }else {
            const isPasswordCorrect = bcrypt.compareSync(req.body.password,user.password);
            if(isPasswordCorrect){
                req.session.user = {
                    id:user.id,
                    username:user.username,
                    email:user.email
                }
                res.json(user);
            } else {
                res.status(403).json({
                    message:"incorrect username or password"
                })
            }
        }
    })
})

module.exports= router