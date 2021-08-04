const router = require('express').Router();


const findAnimalsRoutes = require("./findAnimalsRoutes")
const userRoutes = require("./userRoutes")

router.use("/findAnimalsRoutes", findAnimalsRoutes)
router.use("/userRoutes", userRoutes)


module.exports = router;