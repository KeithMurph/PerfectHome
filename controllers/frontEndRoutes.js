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

  //login
router.get("/login", (req,res) =>{
    if(req.session.loggedIn){
      res.redirect("/")  
      return 
    }
    res.render("login")
})

//log out
router.get("/logout", (req,res)=>{
    req.session.destroy();
    res.send("logged out");
})

//sign up
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

router.get("/breedSearch", (req,res)=> {
    res.render("breedInfo")
})

router.get("/profile", withAuth, (req,res) =>{
    if(req.session.user){
     db.User.findByPk(req.session.user.id,{
         include:[db.User, db.Preferences, db.Favorite]
     }).then(userData =>{
         const userJson = userData.get({plain:true})
         console.log(userJson)
         res.render("profile", userJson)
     }).catch(err=>{
         res.status(500).json(err)
     })
    }}
)

router.get("/breeds/:breed",(req,res)=> {
  db.Breed.findByPk(req.params.breed).then(breed=>{
    
      const breedJson = breed.get({plain:true})
      
      res.render("breedCard",breedJson);
  }).catch(err=>{
      console.log(err);
      res.status(500).json({message:"No breed found!"})
  })
})
    
    
//  } else{
//      res.redirect("/login")
//  }
 


 //get favorite pets
module.exports = router