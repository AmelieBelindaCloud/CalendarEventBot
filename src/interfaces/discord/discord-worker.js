module.exports = { create: ({ DiscordClient, token }) => {
    return class Worker {
        constructor() {}

        work() {
            DiscordClient.login(token)
            
            DiscordClient.once('ready', () => {
                console.log('Ready')
            })
        }
    }
}}