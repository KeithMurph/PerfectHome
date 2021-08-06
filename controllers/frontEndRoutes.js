const express = require('express');
const router = express.Router();
const db = require('../models');
const withAuth = require('../utils/auth');
const Breed = require('../models/Breed')

// router.get("/", (req,res) => {
//     db.User.findAll({
//         //finding user info with the posts
//         include: [db.User]
//     }).then(data => {
//         const allPost = data.map(post=> post.get({
//             plain:true
//         }))
//         res.render("homepage", {layout:"dashboard", allPost})
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

//   //login
router.get("/login", (req,res) =>{
    if(req.session.loggedInUser){
      res.redirect("/profile")  
      return 
    }
    res.render("loginSignup")
})


//log out
router.get("/logout", (req,res)=>{
    req.session.destroy();
    res.redirect("/login");
})

//sign up
router.get("/signUp", (req,res) =>{
    if(req.session.loggedIn){
        res.redirect("/profile")  
        return 
      }
    res.render("createUser")
})

router.get('/survey', (req,res)=>{
    res.render('survey');
})

router.get("/breeds", (req,res)=> {

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

  
// Session route to check if logged in
router.get("/session",(req,res)=>{
  res.json({
      sessionData:req.session
      
  })
})


 

router.get("/profile/:id",(req,res)=>{
  db.User.findByPk(req.params.id,{
      include:[{
          model:db.Preferences,
          model:db.Favorite
      }]
  }).then( async user=>{
      const formatted = user.get({plain:true})
     const hbsUser = {
         ...formatted,
         loggedInUser:req.session.user,
         isMyPage:req.params.id == req.session.user?.id,
     }

     console.log(hbsUser);
      res.render("profile",hbsUser)
  })
})


router.get("/breeds/:breed",(req,res)=> {
  db.Breed.findByPk(req.params.breed).then(breed=>{
    const breedJson = breed.get({plain:true})
    res.render("breedCard", breedJson)
      // // console.log("breed:",breedJson.breed)
      // res.render("breedCard", breedJson);
      // res.json(breed.dataValue.breed)
      // console.log(breed)
  }).catch(err=>{
      console.log(err);
      res.status(500).json({message:"No breed found!"})
  })
})
    
//adopt pets
router.get('/adopt', (req,res)=>{
  res.render('adoptableDogs');
})

router.get('/adopt/:id', (req,res)=>{
  res.render('adoptablePetCard');
})

module.exports = router