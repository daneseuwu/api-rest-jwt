const { response } = require('mongoose')
const User = require('../models/userModels')

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
        const user = req.body;

        const guardar = new User(user)
        guardar.save();

        return res.status(200).json({
            status: 200,
            message: 'Registro creado con exito'
        })

    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: 'Upps ha ocurrido un error del lado del sevidor'
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