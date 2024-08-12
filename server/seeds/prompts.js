const { Prompt } = require('../models');
const cleanDB = require('./cleanDB');
const db = require('../config/connection.js');
const promptSeeds = require('./promptSeeds.json');

db.once('open', async () => {
    try {
        await cleanDB('Prompt', 'prompts');
        await Prompt.create(promptSeeds);

        console.log('Seeded the prompts with', promptSeeds.length, 'prompts');
        process.exit(0);
    } catch (err) {
        throw err;
    }
});
