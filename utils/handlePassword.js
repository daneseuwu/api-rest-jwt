const bcryptjs = require('bcryptjs')

//se recibe contrasena como arguemento en texto plano ex. hola123
const bcrypt = async (passwordPlain) => {

    const hash = await bcryptjs.hash(passwordPlain, 10)

    return hash;

};

const compare = async (passwordPlain, hashPassword) => {

    return await bcryptjs.compare(passwordPlain, hashPassword)

};

module.exports = {
    bcrypt,
    compare
}