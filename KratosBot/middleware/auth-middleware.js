const jwt = require("jsonwebtoken")

module.exports = (req, res, next) =>
{
    if(req.method === "OPTIONS")
    {
        next()
    }
    try
    {
        const token = req.headers.authorization.split(" ")[1]
        if (!token) return res.status(401).json({message: "Not auth"})
        const {id} = jwt.verify(token, process.env.SECRET_KEY)
        console.log(id)
        next()
    }
    catch (e)
    {
        return res.status(401).json({message: "Not auth"})
    }
}