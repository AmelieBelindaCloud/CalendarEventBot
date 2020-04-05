var me = (message) => {
    message.channel.send(`${message.author.username} stinks!`)
}

var maus = (message) => {
    message.channel.send("Der Bär liebt seine Maus!")
}


module.exports = Object.freeze({
    me,
    maus
})