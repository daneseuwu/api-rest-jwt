const { response } = require('mongoose')
const Post = require('../models/postModels')

const getAllPost = async (req, res = response) => {
    try {
        const user = req.user
        const post = await Post.find()
        res.send({ post, user })
        return res.status(200).json({
            status: 200,
            message: 'Listado de post con exito!'
        })

    } catch (error) {
        return res.status(500).json({
            status: 200,
            message: 'Upps ha ocurrido un error en el servidor'

        })
    }
}
const getOnePost = async (req, res = response) => {
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
            status: 200,
            message: 'Upps ha ocurrido un error en el servidor'

        })
    }
}
const createNewPost = async (req, res = response) => {
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
const updateOnePost = async (req, res = response) => { }
const deleteOnePost = async (req, res = response) => { }

module.exports = {
    getAllPost,
    getOnePost,
    createNewPost,
    updateOnePost,
    deleteOnePost
}