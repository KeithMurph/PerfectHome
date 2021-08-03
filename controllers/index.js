const router = require('express').Router();

const frontEndRoutes = require('./frontEndRoutes')

router.use('/', frontEndRoutes)

module.exports = router;