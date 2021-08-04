const router = require('express').Router();


const findAnimalsRoutes = require("./findAnimalsRoutes")
const userRoutes = require("./userRoutes")
const dogBreedRoutes = require("./dogBreedRoutes")

router.use("/findAnimals", findAnimalsRoutes)
router.use("/users", userRoutes)
router.use("/breeds", dogBreedRoutes)


module.exports = router;