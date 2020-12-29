 const Discord = require('discord.js')
exports.run = async(client, message, args) => {
if(!message.guild.emojis.cache.size >= 500){ 
message.channel.send(new Discord.MessageEmbed()
.setDescription(`${message.guild.emojis.cache.map(emoji => emoji).join(' ')}`)
.setColor('RANDOM')
.setTimestamp()
.setTitle(message.guild.name+" EMOJILER")
.setFooter(client.user.username))
} else {
message.reply("Bu Sunucuda 50'den Fazla Emoji Var Diye Emojileri Atamam!")
}}
exports.conf = {
aliases: []
}
exports.help = {
name: "emojiler"
}