const Discord = require("discord.js")


exports.run = (client, message, args) => {

let emojiler = message.guild.emojis.cache.map(e=>e.toString()).join("  ");
const emoji = new Discord.MessageEmbed()
.setColor("YELLOW")
.setTitle("Sunucuda Bulunan Emojiler")
.setDescription(`${emojiler}`)
message.channel.send(emoji) 
}
	
	exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['eooo'],
  permLevel: 0
};
 
exports.help = {
  name: 'emojibak'
}