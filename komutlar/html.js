const Discord = require("discord.js");

exports.run = function(client, message) {
  var html = message.guild.roles.find(html => html.id === "641189298623741952");
  if (message.member.roles.has(html.id))
    return message.channel.send(":warning: `Bu Role Zaten Sahipsin` :warning:");
  message.member.addRole(html);
  message.channel.send(`✅ İşlem Başarılı!`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["site", "web", "HTML", "Html"],
  permLevel: 0
};

exports.help = {
  name: "html",
  description: "HTML kanallarına erişim sağlar.",
  usage: "html"
};
