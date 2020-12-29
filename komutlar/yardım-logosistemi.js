const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const packageconfig = require('../package.json');
let WestraGif = `https://i.hizliresim.com/ZK6WZt.gif`

exports.run = (client, message) => {
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Logo Sistemi Yardım Menüsü`)
 .setDescription(`
 **g!arrow** \n-> Ok şeklinde logo yapar.
 **g!gold** \n-> Altın şeklinde logo yapar.
 **g!green** \n-> Yeşil şeklinde logo yapar.
 **g!graffiti** \n-> Graffiti şeklinde logo yapar.
 **g!discord** \n-> Discord şeklinde logo yapar.
 **g!müzik** \n-> Müzik şeklinde logo yapar.
 **g!kalp** \n-> Kalp şeklinde logo yapar.
 **g!cool** \n-> Cool şeklinde logo yapar.

`)
 .setFooter(`Gif Sky Random Bot`)
 .setTimestamp()
 .setImage(WestraGif)
  .setColor("#5feeff")
 message.channel.send(WestraEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["logo"],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'logosistemi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};