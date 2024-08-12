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

promptSchema.statics.getRandomPrompt = async function () {
    const count = await this.countDocuments();
    const randomIndex = Math.floor(Math.random() * count);
    return this.findOne().skip(randomIndex);
};

const Prompt = model('Prompt', promptSchema);

module.exports = Prompt;
