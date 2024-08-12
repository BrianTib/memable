const { Schema, model } = require('mongoose');

// Player response schema
const playerResponseSchema = new Schema(
    {
        player: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        response: { type: String, required: true },
        totalScore: {
            type: Number,
            default: 0,
            get: function () {
                return this.scores.reduce((acc, score) => acc + score.value, 0);
            },
        },
        // An array of scores. Each user is the user who gave a score, and the value is the score they gave.
        scores: [
            {
                user: { type: Schema.Types.ObjectId, ref: 'User' },
                value: Number,
            },
        ],
    },
    {
        timestamps: true,
        getters: true,
    },
);

// Round schema
const roundSchema = new Schema(
    {
        prompt: { type: Schema.Types.ObjectId, ref: 'Prompt', required: true },
        players: [{ type: Schema.Types.ObjectId, ref: 'User' }],
        responses: [playerResponseSchema],
        totalRoundScore: {
            type: Number,
            default: 0,
            get: function () {
                return this.responses.reduce((acc, score) => acc + score.totalScore, 0);
            },
        },
    },
    {
        timestamps: true,
        getters: true,
    },
);

// Session schema
const sessionSchema = new Schema(
    {
        isOnGoing: { type: Boolean, default: true },
        owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        currentPlayerCount: {
            type: Number,
            default: 0,
            get: function () {
                return this.rounds[this.rounds.length - 1]?.players.length || 0;
            },
        },
        currentRound: {
            type: Number,
            default: 1,
            get: function () {
                return this.rounds.length;
            },
        },
        rounds: {
            type: [roundSchema],
            validate: {
                validator: function (v) {
                    return v.length > 0;
                },
                message: 'A session must have at least one round.',
            },
        },
    },
    {
        timestamps: true,
        getters: true,
    },
);

const Session = model('Session', sessionSchema);

module.exports = Session;
