const { Router } = require('express')
const { signup, signin, profile } = require('../controllers/authControllers')
const { validateCreateNewUser, validateLogin } = require('../validators/user')


const router = Router()

router.post('/signup', validateCreateNewUser, signup)
router.post('/signin', validateLogin, signin)
router.get('/profile', profile)

module.exports = router
