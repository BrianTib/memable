const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const validateUsername = username =>
    /^[a-z0-9_]+$/.test(username) && username === username.toLowerCase();

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true, // Ensures the username is unique
        validate: [
            validateUsername,
            'Username must be alphanumeric and in lowercase with no spaces.',
        ],
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        select: false, // Exclude password from query results by default
    },
});

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// To explicitly include the password field in a query:
userSchema.statics.findWithPassword = function (conditions) {
    return this.findOne(conditions).select('+password');
};

const User = model('User', userSchema);

module.exports = User;
