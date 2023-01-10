const { Schema, default: mongoose } = require('mongoose')
const mongoDelete = require('mongoose-delete')

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

postSchema.plugin(mongoDelete, {
    overrideMethods: 'all'
});


module.exports = mongoose.model('post', postSchema)