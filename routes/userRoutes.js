const { Router } = require('express')
const { validateCreateNewUser } = require('../validators/user')
const { getAllUser, getOneUser, createNewUser, updateOneUser, deleteOneUser } = require('../controllers/userControllers')

const router = Router()

router.get('/', getAllUser)
router.get('/:id', getOneUser)

router.post('/', validateCreateNewUser, createNewUser)

router.put('/:id', updateOneUser)
router.delete('/:id', deleteOneUser)

module.exports = router