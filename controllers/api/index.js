const router = require('express').Router();


const findAnimalsRoutes = require("./findAnimalsRoutes")
const userRoutes = require("./userRoutes")
const dogBreedRoutes = require("./dogBreedRoutes")
const adoptableRoutes = require("./adoptableRoutes");


router.use("/findAnimals", findAnimalsRoutes)
router.use("/users", userRoutes)
router.use("/breeds", dogBreedRoutes)
router.use("/adoptable", adoptableRoutes)


module.exports = router;