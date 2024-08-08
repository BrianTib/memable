const mongoose = require('mongoose');

const { Schema } = mongoose;

const sessionSchema = new Schema({
    players: [userSchema],
    rounds: [roundSchema],
    scores: [scoreSchema],
    createdAt: { type: Date, default: Date.now },
  });

const User = mongoose.model('Session', sessionSchema);

module.exports = Session;
