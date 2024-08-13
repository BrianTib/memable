const { Schema, model } = require('mongoose');

// Player response schema
const playerResponseSchema = new Schema(
    {
        player: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        response: {
            title: String,
            url: String,
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
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    },
);

playerResponseSchema.virtual('totalScore').get(function () {
    return this.scores.reduce((acc, score) => acc + score.value, 0);
});

// Round schema
const roundSchema = new Schema(
    {
        prompt: { type: Schema.Types.ObjectId, ref: 'Prompt', required: true },
        players: [{ type: Schema.Types.ObjectId, ref: 'User' }],
        responses: [playerResponseSchema],
        roundNumber: Number,
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    },
);

roundSchema.virtual('totalRoundScore').get(function () {
    return this.responses.reduce((acc, score) => acc + score.totalScore, 0);
});

// Session schema
const sessionSchema = new Schema(
    {
        isOnGoing: { type: Boolean, default: true },
        owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
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
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    },
);

sessionSchema.virtual('currentPlayerCount').get(function () {
    return this.rounds[this.rounds.length - 1]?.players.length || 0;
});

sessionSchema.virtual('currentRound').get(function () {
    return this.rounds[this.rounds.length - 1];
});

const Session = model('Session', sessionSchema);

module.exports = Session;
