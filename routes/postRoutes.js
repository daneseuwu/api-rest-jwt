const { Router } = require('express')
const user = require('../controllers/postControllers')
const authmiddleware = require('../middleware/session')

const router = Router()

router.get('/', authmiddleware, user.getAllPost)
router.get('/:id', user.getOnePost)
router.post('/', user.createNewPost)
router.put('/:id', user.updateOnePost)
router.delete('/:id', user.deleteOnePost)

module.exports = router