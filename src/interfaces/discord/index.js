const { token } = require('./config.json')
const CommandListener = require('./command-listener')

const Discord = require('discord.js')

const client = new Discord.Client();
CommandListener.listen(client);

client.once('ready', () => {
    console.log('Ready')
})

client.login(token);