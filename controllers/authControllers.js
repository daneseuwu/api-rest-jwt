const { matchedData } = require('express-validator')
const { response } = require('mongoose')
const Auth = require('../models/userModels')
const {compare, bcrypt} = require('../utils/handlePassword')

const signup = async (req, res) => {

    req = matchedData(req)
    const password = await bcrypt(req.password)
    const body = { ...req, password }
    const data = await Auth.create(body)
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