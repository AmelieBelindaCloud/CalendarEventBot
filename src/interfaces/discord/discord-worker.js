module.exports = { create: ({ ChatClient, token }) => {
    return class Worker {
        constructor() {}

        work() {
            ChatClient.login(token)
            
            ChatClient.once('ready', () => {
                console.log('Ready')
            })
            
        }
    }
}}