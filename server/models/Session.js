const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const { Schema } = mongoose;

const sessionSchema = new Schema({
    players: [userSchema],
    rounds: [roundSchema],
    scores: [scoreSchema],
    createdAt: { 
        type: Date, 
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
  });

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;
