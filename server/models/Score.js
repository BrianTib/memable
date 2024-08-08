const { Schema, model } = require('mongoose');

const { Schema } = mongoose;

const scoreSchema = new Schema({
    player: String,
    value: Number,
  });

const Session = mongoose.model('Score', scoreSchema);

module.exports = Score;