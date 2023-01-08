const { Router } = require('express')

const router = Router()
const auth = require('../controllers/authControllers')
const { bcrypt, compare } = require('../utils/handlePassword')

// router.post('/signup', auth.signup)
router.post('/signin', auth.signin)
router.get('/profile', auth.profile)

module.exports = router
