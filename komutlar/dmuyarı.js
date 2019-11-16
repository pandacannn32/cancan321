const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete();
  let botmessage = args.join(" ");
  let yazı = new Discord.RichEmbed()
    .setText(`$(botmessage)`)
 .setURL('')
  .setImage("https://discord.com")
    .setFooter(`Komutu Talep Eden: ${message.author.username}`);
  message.channel.sendEmbed(yazı);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "resimliyaz"
};
