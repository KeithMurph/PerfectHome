const express = require('express');
const router = express.Router();
const db = require('../models');
const withAuth = require('../utils/auth');

// router.get("/", (req,res) => {
//     db.Post.findAll({
//         //finding user info with the posts
//         include: [db.User]
//     }).then(data => {
//         const allPost = data.map(post=> post.get({
//             plain:true
//         }))
//         res.render("allPost", {layout:"dashboard", allPost})
//     })
// })

// const { Adoptable } = require('../models');
// const petsData = require('../seeds/petsData.json')

router.get('/', async (req, res) => {
    try {

    //   const randomPets = Adoptable(Math.floor(Math.random() * petsData.length))
    //   const adoptableData = await randomPets.findAll();
  
    //   const adoptableJson = adoptableData.map((adoptable => adoptable.get({ plain: true })));
  
      res.render('homepage', { 
        // adoptableJson, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get("/login", (req,res) =>{
    if(req.session.loggedIn){
      res.redirect("/")  
      return 
    }
    res.render("login")
})

router.get("/logout", (req,res)=>{
    req.session.destroy();
    res.send("logged out");
})

router.get("/signUp", (req,res) =>{
    if(req.session.loggedIn){
        res.redirect("/")  
        return 
      }
    res.render("createUser")
})

router.get('/survey', (req,res)=>{
    res.render('survey');
})

router.get("/profile", (req,res) =>{
    // if(req.session.user){
    //  db.User.findByPk(req.session.user.id,{
    //      include:[db.User, db.Preferences, db.Favorite]
    //  }).then(userData =>{
    //      const userJson = userData.get({plain:true})
    //      console.log(userJson)
         res.render("profile")
        //  , userJson)
     })
     
//  } else{
//      res.redirect("/login")
//  }
//  })

module.exports = router