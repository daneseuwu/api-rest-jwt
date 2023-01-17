const { connect } = require('mongoose')
const colors = require('colors')

const mongoose = require('mongoose')
mongoose.set('strictQuery', true);

const conn = async () => {

    try {

        await connect(process.env.URI,
            {
                UseNewUrlParser: true,
                useUnifiedTopology: true

            })

        console.log(colors.yellow('Successfully connected mongo database'))
    } catch (error) {

        console.log(colors.red('Error connecting to mongo database!', error))

    }
};

module.exports = {
    conn,
}