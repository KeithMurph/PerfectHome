const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const db = require('../../models');
const withAuth = require('../../utils/auth');

// Create user
router.post("/create",(req,res)=>{
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

// Login
router.post("/login",(req,res)=>{
    db.User.findOne({
        where:{
            username:req.body.username,
        }
    }).then(userData=>{
        if(!userData){
            res.status(403).json({
                message:"Invalid username or password"
            })
        } else {
            if(bcrypt.compareSync(req.body.password,userData.password)){
                req.session.user = {
                    id:userData.id,
                    username:userData.username,
                    email:userData.email
                }
                res.json(userData)
            } else {
                res.status(403).json({
                    message:"Invalid password username or password"
                })
            }
        }
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            message:"Error",
            error:err
        })
    })
})

// Get all users
router.get('/',(req,res)=>{
    db.User.findAll().then(userData=>{
        res.json(userData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            message:"Something went wrong...",
            error:err
        })
    })
})


// Get user by ID
router.get('/:id', async (req,res) => {
    try{
        const userData = await User.findByPk(req.params.id);

            if (!userData) {
                res.status(404).json({ message: 'No user found!' });
                return;
              }

            res.status(200).json(userData)
    } catch (err){
        console.log(err);
        res.status(500),json(err);
    }
})


//get profile

//get favorite pets
router.get("/favoritePets", (req,res)=>{
    
})

module.exports= router