const Router = require('express')
const router = new Router()
const UsersController = require('../controllers/users-controller')
const AuthMiddleware = require('../middleware/auth-middleware')

router.get('/auth', UsersController.HTTPAuth)

module.exports = router