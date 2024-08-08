const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const { Schema } = mongoose;

const roundSchema = new Schema({
    prompt: promptSchema,
    players: [userSchema],
    scores: [scoreSchema],
    createdAt: { 
        type: Date, 
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
  });

const Session = mongoose.model('Round', roundSchema);

module.exports = Round;