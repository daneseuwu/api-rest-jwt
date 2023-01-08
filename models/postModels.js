const { Schema, default: mongoose } = require('mongoose')

const postSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, 'please add title'],
        },
        description: {
            type: String,
            required: [true, 'please add description'],
        },
        category: {
            type: String,
            required: [true, 'please add price']
        },
        author: {
            name: {
                type: String,
                required: [true, 'please add name'],

            },
            position: {
                type: String,
                required: [true, 'please add name'],

            }
        }

    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model('post', postSchema)