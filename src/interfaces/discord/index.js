const Discord = require('discord.js')
const { token } = require('./config.json')
const DiscordWorkerFactory = require('./discord-worker')

const DiscordClient = new Discord.Client();

const DiscordWorker = DiscordWorkerFactory.create({ DiscordClient, token })

module.exports = Object.freeze({
    DiscordWorker,
    DiscordClient
})