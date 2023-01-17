const { response } = require('mongoose')
const { matchedData } = require('express-validator')
const User = require('../models/userModels')
const { bcrypt, compare } = require('../utils/handlePassword')
const { tokenSign } = require('../utils/handleJwt')

const getAllUser = async (req, res = response) => {
    try {

        const user = await User.find()

        return res.status(200).json({
            status: 200,
            data: user,
            message: 'Listado de alumnos con exito!'

        })
    } catch (error) {
        return res.status(500).json({
            stastus: 500,
            message: 'Upps ha ocurrido un error en el servidor'
        })
    }
};
const getOneUser = async (req, res = response) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id)
        return res.status(200).json({
            status: 200,
            data: user,
            message: 'Registro mostrado por id'
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: 'Upps ha ocurriod un error del lado del servidor!'
        })
    }

};
const createNewUser = async (req, res = response, next) => {
    try {

        req = matchedData(req)

        //validar que no haya regitros existente de correo y username
        const username = await User.findOne({ username: req.username });
        const email = await User.findOne({ email: req.email });

        if (username) {

            return res.status(400).json({
                status: 400,
                exist: false,
                message: 'nombre de usuario ya existe'
            });

        } else if (email) {
            return res.status(400).json({
                status: 400,
                exist: false,
                message: 'email ya existe'
            });
        }

        const password = await bcrypt(req.password)
        const body = { ...req, password }

        const dataUser = await User.create(body)
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
};
const updateOneUser = async (req, res = response) => {
    try {

        const { id } = req.params;
        const update = req.body;
        await Alumno.updateOne({ _id: id }, update)

        return res.status(200).json({
            status: 200,
            message: 'Registro actualizado con exito'
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: 'Upps ha ocurriod un error del lado del servidor!'
        })
    }

};
const deleteOneUser = async (req, res = response) => {
    try {
        const { id } = req.params;

        await User.delete({
            _id: id
        })

        return res.status(200).json({
            status: 200,
            message: 'Registro eliminado con exito'
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: 'Upps ha ocurriod un error del lado del servidor!'
        })
    }
};

module.exports = {
    getAllUser,
    getOneUser,
    createNewUser,
    updateOneUser,
    deleteOneUser
}