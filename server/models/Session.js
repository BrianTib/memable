const mongoose = require('mongoose');

const { Schema } = mongoose;

const sessionSchema = new Schema({
    title: {
        type: String,
		required: true,
		trim: true,
    },
});

const User = mongoose.model('Session', sessionSchema);

module.exports = Session;
