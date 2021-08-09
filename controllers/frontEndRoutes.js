const express = require('express');
const router = express.Router();
const db = require('../models');
const withAuth = require('../utils/auth');
const Breed = require('../models/Breed')

const { Adoptable } = require('../models');
const petsData = require('../seed/petsData');
const { compareSync } = require('bcrypt');
const e = require('express');

router.get('/', async (req, res) => {
    try {
    
      const adoptableData = await Adoptable.findAll();
      const adoptableJson = adoptableData.map((adoptable => adoptable.get({ plain: true })));

      // const randomPetArr =[]

      // function generateRandom() {
      //   //Generate random number
      //   let random = adoptableJson(Math.floor(Math.random() * adoptableJson.length));
    
      //   //Coerce to number by boxing
      //   // random = Number(random);
    
      //   if(!randomPetArr.includes(random)) {
      //       randomPetArr.push(random);
      //       return random;
      //   } else {
      //         console.log('No more pets available.')
      //         return false;
      //       }
      //   }
      //   console.log(randomPetArr)
      //   generateRandom();
    
  


    // let randomPetArr = []

    // function random(){
    //  const randomPet1 = adoptableJson(Math.floor(Math.random() * adoptableJson.length));

    //  const randomPet2 = adoptableJson(Math.floor(Math.random() * adoptableJson.length));
  
    //  const randomPet3 = adoptableJson(Math.floor(Math.random() * adoptableJson.length));

    //  const randomPet4 = adoptableJson(Math.floor(Math.random() * adoptableJson.length));

    //  const randomPet5 = adoptableJson(Math.floor(Math.random() * adoptableData.length));

    // randomPetArr.push(randomPet1)

    //  if (randomPet1 === randomPet2){
    //    random()
    //  }else {
    //    randomPetArr.push(randomPet2)
    //  }

    //  if (randomPet3 === randomPet2 || randomPet3 === randomPet1){
    //   random()
    // }else {
    //   randomPetArr.push(randomPet3)
    // }

    // if (randomPet4 === randomPet3 || randomPet4 === randomPet2 || randomPet3 === randomPet1){
    //   random()
    // }else {
    //   randomPetArr.push(randomPet4)
    // }

    // if (randomPet5 === randomPet4 || randomPet5 === randomPet3 ||randomPet5 === randomPet2 || randomPet5 === randomPet1){
    //   random()
    // }else {
    //   randomPetArr.push(randomPet4)
    // }
    // } 


      res.render('homepage', { 
        adoptableJson, 

        randomPet1 : adoptableJson[Math.floor(Math.random() * adoptableJson.length)],
        randomPet2: adoptableJson[Math.floor(Math.random() * adoptableJson.length)],
        randomPet3: adoptableJson[Math.floor(Math.random() * adoptableJson.length)],
        randomPet4: adoptableJson[Math.floor(Math.random() * adoptableJson.length)],
        randomPet5: adoptableJson[Math.floor(Math.random() * adoptableJson.length)],
        logged_inr: req.session.user 

      });
    } catch (err) {
      res.status(500).json(err);
    }

  });

//login
router.get("/login", (req,res) =>{
  console.log(req.session)
    if(req.session.user){
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
    if(req.session.user){
        res.redirect("/profile")  
        return 
      }
    res.render("createUser")
})

// survey
router.get('/survey', (req,res)=>{
    res.render('survey', {logged_inr: req.session.user });
})

// get all breeds
router.get("/breeds", (req,res)=> {
  if(req.session.user){
  res.render("breedInfo",
  {logged_inr:req.session.user})
} else {
res.render('breedInfo')
}
})

// login
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

// profile by id
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
         logged_inr:req.session.user,
         isMyPage:req.params.id == req.session.user.id,
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
router.get("/adopt", async (req,res)=> {
  try{
    const dbPetsData = await Adoptable.findAll();
    const dogsData = dbPetsData.map((dogs)=> 
    dogs.get({plain:true}));
    res.render("adoptableDogs", {petsdata:dogsData, logged_inr: req.session.user});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

router.get("/adopt/preferences", async (req,res)=> {
  try{
    const dbPetsData = await Adoptable.findAll({where: {
      type:req.query.type,
      size:req.query.size,
      age:req.query.age,
      house_size:req.query.house_size,
      good_with_children:req.query.good_with_children === "true",
      good_with_dogs:req.query.good_with_dogs === "true",
      good_with_cats:req.query.good_with_cats === "true",
      spayed:req.query.spayed === "true"
    }});
    const dogsData = dbPetsData.map((dogs)=> 
    dogs.get({plain:true}));
    res.render("preferences", {petsdata:dogsData, logged_inr: req.session.user});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})


router.get('/adopt/:id', (req,res)=>{
  db.Adoptable.findByPk(req.params.id).then(adoptable => {

    const adoptableJson = adoptable.get({plain:true});

    res.render('fullPetCard', {petsdata: adoptableJson, logged_inr: req.session.user});
  }).catch(err=>{
    console.log(err);
    res.status(500).json({message:"No dog found!"})
  })
})



module.exports = router