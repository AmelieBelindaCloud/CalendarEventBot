const CommandFactory = require('./command')
const CommanderFactory = require('./commander')

const Command = CommandFactory.create({});
const Commander = CommanderFactory.create({});

module.exports = Object.freeze({ 
    Command, 
    Commander 
})