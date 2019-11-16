const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = (client, message, params) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
      .setColor(0xff0000)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("Eğlence Komutları Özel Mesajlarda Kullanılamaz!");
    return message.author.sendEmbed(ozelmesajuyari);
  }
  if (message.channel.type !== "dm") {
    const ıhlamur = new Discord.RichEmbed()
      .setAuthor(message.author.username + " Ihlamur İçti!")
      .setColor("#3447003")
      .setTimestamp()
      .setDescription("")
      .setURL("")
      .setImage(
        `tps://cdn.discordapp.com/attachments/645234211808346112/645290712962826240/hangi-hastaliga-hangi-kis-icecegi-iyi-gelir--2641463.Gif.gif`
      );
    return message.channel.send(ıhlamur);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ıhlamur-iç", "ıhlamuriç"],
  permLevel: 0
};

exports.help = {
  name: "ıhlamur",
  description: "Ihlamur İçersiniz",
  usage: "ıhlamur"
};
