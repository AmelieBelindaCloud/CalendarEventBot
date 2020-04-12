module.exports = { create: ({ ChatService }) => {
    return class Command {
        constructor({
            id,
            name,
            roles
        } = {}) {
            if (!id) {
                ChatService.error('It was not possible to identify you.')
            }
            if (!name) {
                ChatService.error('You must have a name to enter commands.')
            }
            if (!roles) {
                ChatService.error('You must have at least one role to be allowed to send commands.')
            }

            return Object.freeze({
                getId: () => id,
                getName: () => name,
                getRoles: () => roles
            })
        }
    }
}}