const { response } = require('mongoose')
const Auth = require('../models/userModels')

// const signup = async (req, res, next) => {

//     const { username, password } = req.body
//     console.log(username, password)
//     Auth
// }

const signin = async (req, res = response) => {
    res.json('signin')

}
const profile = async (req, res = response) => {
    res.json('profile')

}
module.exports = {
    signin,
    profile
}