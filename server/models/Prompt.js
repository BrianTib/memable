const { Schema, model } = require('mongoose');

const { Schema } = mongoose;

const promptSchema = new Schema({
    text: String,
    image: String,
  });

const Session = mongoose.model('Prompt', promptSchema);

module.exports = Prompt;