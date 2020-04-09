const { DiscordWorker } = require('./interfaces/discord')

const discordWorker = new DiscordWorker();
discordWorker.work();