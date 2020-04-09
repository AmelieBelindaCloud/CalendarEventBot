const Commands = require('../../application/commands')

module.exports = { create: ({ ChatClient, prefix }) => {
    return class CommandListener {
        constructor() {
            ChatClient.on('message', message => {
                let args = message.content.split(' ')
                let first = args[0]
                if(first.startsWith(prefix)) {
                    let commandName = first.substring(first.indexOf(".")+1, first.length)
                    let command = Commands[commandName]
                    if(command) command(message, args)
                }
            })
        }
    }
}}