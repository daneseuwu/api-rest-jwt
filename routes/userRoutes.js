const { Router } = require('express')
const router = Router()

const user = require('../controllers/userControllers')

router.get('/', user.getAllUser)
router.get('/:id', user.getOneUser)
router.post('/', user.createNewUser)
router.put('/:id', user.updateOneUser)
router.delete('/:id', user.deleteOneUser)

module.exports = router