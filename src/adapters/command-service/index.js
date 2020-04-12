const { DiscordClient } = require('../../interfaces/discord')
const { ChatService } = require('../chat-service')
const Commands = require('../../application/commands')

const { prefix } = require('./config.json')
const CommandListenerFactory = require('./command-listener')

const CommandListener = CommandListenerFactory.create({ ChatClient: DiscordClient, Commands, ChatService, prefix })

module.exports = Object.freeze({
    CommandListener
})