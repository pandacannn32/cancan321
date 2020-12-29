const Discord = require("discord.js");
const client = new Discord.Client();
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
const db = require("quick.db");
let WestraGif = `https://i.hizliresim.com/ZK6WZt.gif`;
//db.get"linkler" // ne yapmaya çalışıyom ben aq

exports.run = async (client, message) => {
  let linkler = await db.fetch(`linkler`);
  const duration = moment
    .duration(client.uptime)
    .format(" D [Gün], H [Saat], m [Dakika], s [Saniye]");
  const istatistikozel = new Discord.MessageEmbed()
    .setColor(0x36393f)
    //.setAuthor(client.user.username)
    //${db.get("linkler").length}
    .setTitle("Sky İstatislik")
	.setColor("RANDOM")
	.setThumbnail(client.user.avatarURL())
	.addField(
      "• Yapımcım •",
      `**<@668825686470819860>**`
    )
		.addField(
      "• Destekçi •",
      `**<@572829263862956041>**`
    )
   .addField(
  "• Kullanıcı Sayısı •",
      `${client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString()}`,
      true
    ) //${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}
    .addField("• Sunucu Sayısı •", `${client.guilds.cache.size}`, true)
    .addField(
      "• Kanal Sayısı •",
      `${client.channels.cache.size.toLocaleString()}`,
      true
    )
    .addField("• Ping •", `${client.ws.ping}`)
    // .addField("• Uptime Edilen Bot Sayısı •", `${linkler.length}`)// 1dk bekle  //selamın aleyküm türk varmı
    .addField(
      "• Kullanılan Ram Miktarı •",
      `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(9)}`
    )
    .addField("• Uptime Süresi •", `${duration}`)
    .addField("• Komut Sayısı •", `${client.commands.size}`)
    .setImage(WestraGif)
    .setFooter(`Sky`)
    .setTimestamp();
  message.channel.send(istatistikozel);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [
    "istatistik",
    "i",
    "istatistikler",
    "botbilgi",
    "bilgi",
    "hakkında",
    "yapımcım",
    "bothakkında"
  ],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: "bilgi",
  description: "Bot ile ilgili bilgi verir.",
  usage: "bilgi"
};
