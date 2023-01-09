const { matchedData } = require('express-validator')
const { response } = require('mongoose')
const Auth = require('../models/userModels')
const { bcrypt, compare } = require('../utils/handlePassword')
const { tokenSign } = require('../utils/handleJwt')

const signup = async (req, res) => {

    req = matchedData(req)
    const password = await bcrypt(req.password)
    const body = { ...req, password }

    const dataUser = await Auth.create(body)
    dataUser.set('password', undefined, { strict: false })

    const data = {

        token: await tokenSign(dataUser),
        user: dataUser

    }

    res.send({ data })

}

const signin = async (req, res = response) => {
    res.json('signin')

}
const profile = async (req, res = response) => {
    res.json('profile')

}
module.exports = {
    signup,
    signin,
    profile
}