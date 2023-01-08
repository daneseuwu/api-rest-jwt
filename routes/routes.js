const express = require('express')
const user = require('../routes/userRoutes')
const post = require('../routes/postRoutes')
const auth = require('../routes/authRoutes')

const router = express.Router()

router.use('/user', user)
router.use('/post', post)
router.use('/auth', auth)

module.exports = router