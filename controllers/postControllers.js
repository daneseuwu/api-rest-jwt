const { response } = require('mongoose')
const Post = require('../models/postModels')

const getAllPost = async (req, res, next) => {

    try {

        const post = await Post.find()

        return res.status(200).json({
            status: 200,
            data: post,
            message: 'Listado de post con exito!'
        })

    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: 'Upps ha ocurrido un error en el servidor'

        })
    }

}
const getOnePost = async (req, res, next) => {
    try {
        const { id } = req.params;
        const post = await Post.findById(id)

        return res.status(200).json({
            status: 200,
            data: post,
            message: 'Listado de post con exito!'

        })

    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: 'Upps ha ocurrido un error en el servidor'

        })
    }
}
const createNewPost = async (req, res, next) => {
    try {

        const post = req.body;
        const guardar = new Post(post)
        guardar.save()

        return res.status(200).json({
            status: 200,
            message: "Registro creado con exito"
        })

    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: 'Upps ha ocurrido un error del lado del sevidor'

        })
    }
}
const updateOnePost = async (req, res, next) => {
    try {
        const { id } = req.params;
        const update = req.body;
        await Post.updateOne({ _id: id }, update)

        return res.status(200).json({
            status: 200,
            data: update,
            message: 'update success'
        })

    } catch (error) {

        return res.status(500).json({
            status: 500,
            message: 'Upps ha ocurriod un error del lado del servidor!'
        })
    }
}
const deleteOnePost = async (req, res, next) => {
    try {
        const { id } = req.params;
        await Post.delete({
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
}

module.exports = {
    getAllPost,
    getOnePost,
    createNewPost,
    updateOnePost,
    deleteOnePost
}