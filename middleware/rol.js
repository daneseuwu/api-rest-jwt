const checkRol = (roles) => (req, res, next) => {

    try {

        const { user } = req;
        console.log({ user })
        const rolById = user.role;
        const checkValueRol = roles.some((rolSingle) => rolById.includes(rolSingle))

        if (!checkValueRol) {

            return res.status(401).json({
                status: 401,
                message: 'user not permision'
            })
        }

        next()
    } catch (error) {

        console.log(error)
    }
}

module.exports = checkRol