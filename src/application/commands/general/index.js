const InfoCommandFactory = require('./info-command')
const HelpCommandFactory = require('./help-command')

const info = InfoCommandFactory.create({  })
const help = HelpCommandFactory.create({  })

const q = (command, output) => {
    output.error(`args: ${command.getArguments()}`)
    //output.info(message.member.hasPermission('ADMINISTRATOR'))

    for (let role of command.getCommander().getRoles()) {
        output.info(role);
    }

    output.info(command.getCommander().getName() + " stinks.")
}

module.exports = Object.freeze({
    info,
    help,
    q
})