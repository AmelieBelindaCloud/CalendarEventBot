const { DiscordWorker } = require('./interfaces/discord')
const { CommandListener } = require('./adapters/command-service')

const Commands = require('./application/commands')
console.log(Commands)

const discordListener = new CommandListener()
discordListener.listen()

const discordWorker = new DiscordWorker();
discordWorker.work();