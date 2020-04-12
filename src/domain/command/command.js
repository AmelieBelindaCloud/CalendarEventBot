module.exports = { create: ({ ChatService }) => {
    return class Command {
        constructor({
            name,
            args,
            commander
        } = {}) {
            if (!name) {
                ChatService.error('Command could not be identified.')
            }
            if (!commander) {
                ChatService.error('Commands without an attached person are not allowed.')
            }
            if (!args) args = []

            return Object.freeze({
                getName: () => name,
                getArguments: () => args,
                getCommander: () => commander
            })
        }
    }
}}