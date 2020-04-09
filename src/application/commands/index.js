const GeneralCommands = require('./general')
const CalendarCommands = require('./calendar')

const commands = {};
Object.assign(commands, GeneralCommands)
Object.assign(commands, CalendarCommands)

module.exports = Object.freeze(commands)