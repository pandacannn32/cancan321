const Discord = require('discord.js');

exports.run = function(client, message) {
 
  var role = message.guild.roles.find(role => role.id === "638769427504168961"); 
  if (message.member.roles.has(role.id)) return message.channel.send(":warning: `Bu Role Zaten Sahipsin` :warning:")
  message.member.addRole(role);
  message.channel.send(`✅ İşlem Başarılı!`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['discord.js','javascript'],
  permLevel: 0
};

exports.help = {
  name: 'js',
  description: 'JavaScript kanallarına erişim sağlar.',
  usage: 'js'
};