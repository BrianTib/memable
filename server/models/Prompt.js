const { Schema, model } = require('mongoose');

const promptSchema = new Schema(
    {
        text: String,
        imageUrl: String,
    },
    {
        validate: {
            validator: function (v) {
                return v.text || v.imageUrl; // Ensure at least one of the fields is filled
            },
            message: 'Prompt must have either text or an image URL.',
        },
    },
);

const Prompt = model('Prompt', promptSchema);

module.exports = Prompt;
