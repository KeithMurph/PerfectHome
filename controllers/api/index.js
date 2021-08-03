const router = require('express').Router();


const findAnimalsRoutes = require("./findAnimalsRoutes")

router.use("/findAnimalsRoutes", findAnimalsRoutes)


module.exports = router;