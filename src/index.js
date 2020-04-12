const { DiscordWorker } = require('./interfaces/discord')

const { CommandListener } = require('./adapters/command-service')


const discordListener = new CommandListener()
discordListener.listen()

const discordWorker = new DiscordWorker();
discordWorker.work();