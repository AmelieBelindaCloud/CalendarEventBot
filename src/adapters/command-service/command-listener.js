const { Command, Commander } = require('../../domain/command')

module.exports = { create: ({ ChatClient, ChatService, Commands, prefix }) => {
    return class CommandListener {
        listen() {
            ChatClient.on('message', message => {
                let args = message.content.split(' ')
                let first = args[0]
                let commandName = first.substring(first.indexOf(".")+1, first.length)

                if(!first.startsWith(prefix)) {
                    return
                }

                let commander = new Commander({
                    id: message.author.id,
                    name: message.author.username,
                    roles: (() => {
                        let roles = []
                        for (let [id, role] of message.member.roles.cache) {
                            roles.push(role.name)
                        }
                        return roles
                    })()
                })

                let command = new Command({
                    name: commandName,
                    args,
                    commander
                })

                let output = new ChatService(message)

                let cmd = Commands[command.getName()]
                if(cmd) cmd(command, output)
            })
        }
    }
}}