const ChatServiceFactory = require('./chat')

const ChatService = ChatServiceFactory.create({ /*Message*/ })

module.exports = Object.freeze({
    ChatService
})