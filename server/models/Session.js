const { Schema, model } = require('mongoose');

// This gets the total score for a player based on the scores aray
function getPlayerScore() {
    return this.score.reduce((acc, score) => acc + score.value, 0);
}

// This represents each response a player gives to a prompt
const playerResponseSchema = new Schema(
    {
        player: { type: Schema.Types.ObjectId, ref: 'User' },
        response: String,
        totalScore: {
            type: Number,
            default: 0,
            get: getPlayerScore,
        },
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

// This gets the total score for a round
function getTotalRoundScore() {
    return this.scores.reduce((acc, score) => acc + score.totalScore, 0);
}

// This represents each round in a session
const roundSchema = new Schema(
    {
        prompt: String,
        players: [{ type: Schema.Types.ObjectId, ref: 'User' }],
        scores: [playerResponseSchema],
        totalRoundScore: {
            type: Number,
            default: 0,
            get: getTotalRoundScore,
        },
    },
    {
        timestamps: true,
        getters: true,
    },
);

function getCurrentRounds() {
    this.currentRound = this.rounds.length;
    return this.currentRound;
}

function getCurrentPlayerCount() {
    this.currentPlayerCount = this.rounds[this.currentRound].players.length;
    return this.currentPlayerCount;
}

const sessionSchema = new Schema(
    {
        isOnGoing: { type: Boolean, default: true },
        currentPlayerCount: { type: Number, default: 0, get: getCurrentPlayerCount },
        currentRound: { type: Number, default: 1, get: getCurrentRounds },
        rounds: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Round',
                // Each session must have at least one round
                validate: {
                    validator: function (v) {
                        return v.length > 0;
                    },
                    message: 'A session must have at least one round.',
                },
            },
        ],
    },
    {
        timestamps: true,
        getters: true,
    },
);

const Session = model('Session', sessionSchema);

module.exports = Session;
