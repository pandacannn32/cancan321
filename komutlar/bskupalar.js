const db = require('quick.db');

const Discord = require('discord.js')
exports.run = function(client, message) {
 var kupa = db.fetch(`kupa_${message.author.id}`) || 0
message.channel.send(new Discord.MessageEmbed()
  .setTitle("Brawl Stars")
  .setColor(message.guild.me.displayColor)
  .addField("🏆 Şuanki Kupan", kupa, true))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kupam',
  description: 'JavaScript kanallarına erişim sağlar.',
  usage: 'js'
};