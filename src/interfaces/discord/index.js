const Discord = require('discord.js')
const { token, prefix } = require('./config.json')
const CommandListenerFactory = require('./command-listener')
const DiscordWorkerFactory = require('./discord-worker')

const client = new Discord.Client();

const CommandListener = CommandListenerFactory.create({ ChatClient: client, prefix })
const temp = new CommandListener()
const DiscordWorker = DiscordWorkerFactory.create({ ChatClient: client, token })

module.exports = Object.freeze({
    DiscordWorker
})