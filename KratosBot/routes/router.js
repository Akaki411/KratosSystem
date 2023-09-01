const Router = require('express')
const router = new Router()

const userRouter = require('./user-router')
const countriesRouter = require('./countries-router')
const citiesRouter = require('./cities-router')
const buildingsRouter = require('./buildings-router')
const controlsRouter = require('./controls-router')

router.use("/user", userRouter)
router.use("/countries", countriesRouter)
router.use("/cities", citiesRouter)
router.use("/buildings", buildingsRouter)
router.use("/governance", controlsRouter)

module.exports = router