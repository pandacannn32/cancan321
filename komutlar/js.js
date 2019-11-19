const Discord = require('discord.js');

exports.run = function(client, message) {
 
  var js = message.guild.roles.find(js => js.id === "638769427504168961"); 
  if (message.member.roles.has(js.id)) return message.channel.send(":warning: `Bu Role Zaten Sahipsin` :warning:")
  message.member.addRole(js);
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