const Discord = require('discord.js');

exports.run = function(client, message) {
 
  var role = message.guild.roles.find(role => role.id === "641189298623741952"); 
  if (message.member.roles.has(role.id)) return message.channel.send(":warning: `Bu Role Zaten Sahipsin` :warning:")
  message.member.addRole(role);
  message.channel.send(`✅ İşlem Başarılı!`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['site','web','HTML','Html'],
  permLevel: 0
};

exports.help = {
  name: 'html',
  description: 'HTML kanallarına erişim sağlar.',
  usage: 'html'
};