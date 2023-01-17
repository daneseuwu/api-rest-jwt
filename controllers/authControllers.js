const { matchedData } = require('express-validator')
const { response } = require('mongoose')
const Auth = require('../models/userModels')
const { bcrypt, compare } = require('../utils/handlePassword')
const { tokenSign } = require('../utils/handleJwt')

const signup = async (req, res) => {
    try {

        req = matchedData(req)

        //validar que no haya regitros existente de correo y username
        const username = await Auth.findOne({ username: req.username });
        const email = await Auth.findOne({ email: req.email });

        if (username) {

            return res.status(400).json({
                status: 400,
                exist: false,
                message: 'name already exists'
            });

        } else if (email) {
            return res.status(400).json({
                status: 400,
                exist: false,
                message: 'email already exists'
            });
        }

        const password = await bcrypt(req.password)
        const body = { ...req, password }

        const dataUser = await Auth.create(body)
        dataUser.set('password', undefined, { strict: false })

        const data = {

            token: await tokenSign(dataUser),
            user: dataUser

        }

        res.send({ data })

    } catch (error) {

        res.status(500).json({
            status: 500,
            data: user,
            message: 'ha ocurrido un error en el servidor'
        })

    }

}

const signin = async (req, res = response) => {

    try {

        req = matchedData(req)
        const user = await Auth.findOne({ username: req.username })
            .select('name lastname password email role')

        if (!user) {

            return res.status(404).json({
                status: 404,
                data: user,
                message: 'user not found'
            })
        }

        // const hashPassword = user.password;

        const hashPassword = user.get('password');
        const check = await compare(req.password, hashPassword)

        if (!check) {
            return res.status(401).json({
                status: 401,
                message: 'password incorrect'
            })
        }

        user.set('password', undefined, { strict: false })
        const data = {
            token: await tokenSign(user),
            user
        }

        res.send({ data })

    } catch (error) {

        return res.status(500).json({
            stastus: 500,
            data: user,
            message: 'Upps ha ocurrido un error en el servidor'
        })
    }

}

module.exports = {
    signup,
    signin
}