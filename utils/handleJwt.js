const jwt = require('jsonwebtoken')
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;

/**
 * se debe de pasar el objecto del usuario para firmar
 * @param {*} user 
 * @returns 
 */
const tokenSign = async (user) => {

    const sign = jwt.sign(
        {
            _id: user._id,
            //role: user.role

        },

        JWT_SECRET,
        {
            expiresIn: '2h'
        }

    )

    return sign
};

/**
 * verificar token verifica firma
 * @param {*} tokenJwt 
 * @returns 
 */
const verifyToken = async (tokenJwt) => {

    try {

        return jwt.verify(tokenJwt, JWT_SECRET)

    } catch (error) {

        return null

    }

};

module.exports = {
    tokenSign,
    verifyToken
}