const { Router } = require('express')
const { getAllPost, getOnePost, createNewPost, updateOnePost, deleteOnePost } = require('../controllers/postControllers')
const authmiddleware = require('../middleware/session')
const { validateCreatePost } = require('../validators/post')
const checkRol = require('../middleware/rol')

const router = Router()

router.get('/', authmiddleware, checkRol(['admin']), getAllPost)
router.get('/:id', authmiddleware, checkRol(['admin']), getOnePost)
router.post('/', validateCreatePost, authmiddleware, checkRol(['admin']), createNewPost)
router.put('/:id', authmiddleware, checkRol(['admin']), updateOnePost)
router.delete('/:id', authmiddleware, checkRol(['admin']), deleteOnePost)

module.exports = router