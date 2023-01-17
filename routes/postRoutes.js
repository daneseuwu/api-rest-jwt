const { Router } = require('express')
const { getAllPost, getOnePost, createNewPost, updateOnePost, deleteOnePost } = require('../controllers/postControllers')
const authmiddleware = require('../middleware/session')
const { validateCreatePost } = require('../validators/post')
const checkRol = require('../middleware/rol')

const router = Router()

router.get('/', getAllPost)
router.get('/:id', authmiddleware, checkRol(['admin', 'user']), getOnePost)
router.post('/', validateCreatePost, authmiddleware, checkRol(['admin', 'user']), createNewPost)
router.put('/:id', authmiddleware, checkRol(['admin', 'user']), updateOnePost)
router.delete('/:id', authmiddleware, checkRol(['admin', 'user']), deleteOnePost)

module.exports = router