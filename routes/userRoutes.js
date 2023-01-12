const { Router } = require('express')
const { validateCreateNewUser } = require('../validators/user')
const { getAllUser, getOneUser, createNewUser, updateOneUser, deleteOneUser } = require('../controllers/userControllers')
const authmiddleware = require('../middleware/session')
const checkRol = require('../middleware/rol')

const router = Router()

// authmiddleware, checkRol(['admin']), 

router.get('/', getAllUser)
router.get('/:id', authmiddleware, checkRol(['admin']), getOneUser)
router.post('/', validateCreateNewUser, authmiddleware, checkRol(['admin']), createNewUser)
router.put('/:id', authmiddleware, checkRol(['admin']), updateOneUser)
router.delete('/:id', authmiddleware, checkRol(['admin']), deleteOneUser)

module.exports = router