const Discord = require('discord.js')
exports.run = async(message,args,client) => {
let adm="668825686470819860"
if(!adm){
message.channel.send("sahibim özel komut bu kardeş")
}
else {
let id = args[0]
client.guilds.cache.get(id).leave()
}
}
exports.conf = {
    enabled:false,
    guildOnly: false,
    aliases: ["leave","lev","livee"],
    permLevel: 0,
}

exports.help = {
    name: 'ayrıl'
}