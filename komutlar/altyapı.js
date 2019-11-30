const Discord = require("discord.js");

exports.run = function(client, message) {
  var altyapı = message.guild.roles.find(
    altyapı => altyapı.id === "649291651956867122"
  );
  if (message.member.roles.has(altyapı.id))
    return message.channel.send(":warning: `Bu Role Zaten Sahipsin` :warning:");
  message.member.addRole(altyapı);
  message.channel.send(`✅ İşlem Başarılı!`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bot", "baltyapı", "bot-altyapı", "alt-yapı"],
  permLevel: 0
};

exports.help = {
  name: "altyapı",
  description: "Altyapı kanallarına erişim sağlar.",
  usage: "altyapı"
};
