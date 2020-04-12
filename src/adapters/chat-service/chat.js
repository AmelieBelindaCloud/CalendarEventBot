module.exports = { create: function({ }) {
	return class ChatService {
			constructor(message) {
			if(!message) throw new Error('Message must not be empty.')

			this.output = message.channel
		}

		async error(message) {
			this.output.send(message)
		}

		async info(message) {
			this.output.send(message)
		}

		async q(message) {
			console.log(message.member.hasPermission('ADMINISTRATOR'))
		
			for (let [id, role] of message.member.roles.cache) {
				console.log(id + ' goes ' + role.name);
			}
		
			message.channel.send(message.author.username + " stinks.")
		}
	}
}}