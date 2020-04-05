const { prefix } = require('./config.json')
const Commands = require('./commands')

let listen = (client) => {
    client.on('message', message => {
        let args = message.content.split(' ')
        let first = args[0]
        if(first.startsWith(prefix)) {
            let commandName = first.substring(first.indexOf(".")+1, first.length)
            let command = Commands[commandName]
            if(command) command(message, args)
        }
    })
}

module.exports = Object.freeze({
    listen
})