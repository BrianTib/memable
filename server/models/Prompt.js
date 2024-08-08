const { Schema, model } = require('mongoose');

const promptSchema = new Schema({
    text: String,
    image: String,
});

const Prompt = model('Prompt', promptSchema);

module.exports = Prompt;
