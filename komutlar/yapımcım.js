const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  
  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField(`Yapımcılarım`, `<@713678882011742230> Ve <@640250146453454848>`)
.setFooter(client.user.username, client.user.avatarURL)

  message.channel.send(embed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yapımcı','Yapımcı','Yapımcım'],
  permLevel: 0,
  kategori: "sunucu"
};
//【Maiar】Code★Botlist★Uptime AİTDİR!!!
module.exports.help = {
  name: "yapımcım",
  description: "yapımcılar",
  usage: "yapımcım"
};