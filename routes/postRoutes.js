const { Router } = require('express')
const router = Router()

const user = require('../controllers/postControllers')
router.get('/', user.getAllPost)
router.get('/:id', user.getOnePost)
router.post('/', user.createNewPost)
router.put('/:id', user.updateOnePost)
router.delete('/:id', user.deleteOnePost)

module.exports = router