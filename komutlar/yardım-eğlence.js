const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const ayarlar = require('../ayarlar.json');
let WestraPrefix = ayarlar.prefix
let WestraGif = `https://i.hizliresim.com/ZK6WZt.gif`

exports.run = (client, message) => {
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Yardım Eğlence Menüsü`)
 .setDescription(`
**${WestraPrefix}atasözü** \n-> Rastgele atasözü atar.
**${WestraPrefix}atatürkün-sözü** \n-> Rastgele Atatürk'ün sözü atar.
**${WestraPrefix}yazıtura** \n-> Rastgele yazı-tura atar.
**${WestraPrefix}zarat** \n-> Rastgele zar atar.
`)
 .setFooter(`Sky`)
 .setTimestamp()
 .setImage(WestraGif)
 .setColor("#5feeff")
 message.channel.send(WestraEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};