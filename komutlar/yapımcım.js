const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  
  const embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .addField(`Yapımcım`, `<@630476128804536397>`)
.setFooter(client.user.username, client.user.avatarURL)

  message.channel.send(embed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yapımcı','yapımcım'],
  permLevel: 0,
  kategori: "sunucu"
};

module.exports.help = {
  name: "yapımcım",
  description: "yapımcılar",
  usage: "yapımcım"
};