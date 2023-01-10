const { Router } = require('express')
const { signup, signin } = require('../controllers/authControllers')
const { validateCreateNewUser, validateLogin } = require('../validators/user')


const router = Router()

router.post('/signup', validateCreateNewUser, signup)
router.post('/signin', validateLogin, signin)

module.exports = router
