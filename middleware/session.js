const { verifyToken } = require('../utils/handleJwt')
const User = require('../models/userModels')

const authmiddleware = async (req, res, next) => {

    try {

        if (!req.headers.authorization) {

            return res.status(401).json({
                status: 401,
                message: 'required session autorization'
            })
        }

        const token = req.headers.authorization.split(' ').pop();
        
        const dataToken = await verifyToken(token)

        if (!dataToken._id) {

            return res.status(401).json({
                status: 401,
                message: 'Error token id'
            })
        }


        const user = await User.findById(dataToken._id)
        req.user = user

        next()

    } catch (error) {

        console.log(error)

    }

}

module.exports = authmiddleware