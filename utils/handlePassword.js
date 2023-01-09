const bcryptjs = require('bcryptjs')

//se recibe contrasena como argumento en texto plano example. hola123
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