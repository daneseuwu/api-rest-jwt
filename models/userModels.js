const { Schema, mongoose } = require('mongoose')
const mongoDelete = require('mongoose-delete')

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'please add name']
        },
        lastname: {
            type: String,
            required: [true, 'please add lastname']
        },
        username: {
            type: String,
            unique: true,
            required: [true, 'please add username']
        },
        password: {
            type: String,
            select: false,
            required: [true, 'please add password']
        },
        email: {
            type: String,
            unique: true,
            required: [true, 'please add email']
        },
        age: {
            type: Number,
            required: [true, 'please add age']

        },
        role: {
            type: ['user', 'admin'],
            default: 'user',
        }

    },

    {
        timestamps: true,
        versionKey: false

    },
);

userSchema.plugin(mongoDelete, {
    overrideMethods: 'all'
});

module.exports = mongoose.model('user', userSchema)