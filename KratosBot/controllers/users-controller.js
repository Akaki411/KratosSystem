const jwt = require('jsonwebtoken')
const ApiError = require('../error/api-error')

class UsersController
{
    async HTTPAuth(req, res, next)
    {
        const {id, key} = req.query
        if(!key)
        {
            return next(ApiError.BadRequest("Token not sent"))
        }
        if(!id)
        {
            return next(ApiError.BadRequest("\"id\" is not found"))
        }
        const token = jwt.sign({id: id}, process.env.SECRET_KEY, {expiresIn: '6h'})
        res.json({token: token})
    }
    async HTTPGetRes(req, res)
    {
        res.json({message: "Hello World!"})
    }
}

module.exports = new UsersController()