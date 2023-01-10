const { check } = require('express-validator')
const validateResults = require('../utils/handleValidator')

const validateCreatePost = [

    check('title')
        .exists()
        .notEmpty()
        .isLength({ min: 5, max: 50 })
        .withMessage('title is required'),

    check('description')
        .exists()
        .notEmpty()
        .isLength({ min: 5, max: 200 })
        .withMessage('description is required'),

    check('category')
        .exists()
        .notEmpty()
        .isLength({ min: 5, max: 20 })
        .withMessage('category is required'),

    check('author.name')
        .exists()
        .notEmpty()
        .isLength({ min: 5, max: 20 })
        .withMessage('author is required'),

    check('author.position')
        .exists()
        .notEmpty()
        .isLength({ min: 5, max: 20 })
        .withMessage('position is required'),

    (req, res, next) => {

        return validateResults(req, res, next)
    }
]
module.exports = {

    validateCreatePost
}