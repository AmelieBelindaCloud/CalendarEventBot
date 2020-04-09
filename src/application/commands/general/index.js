const InfoCommandFactory = require('./info-command')
const HelpCommandFactory = require('./help-command')

const info = InfoCommandFactory.create({  })
const help = HelpCommandFactory.create({  })

module.exports = Object.freeze({
    info,
    help
})