const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const packageconfig = require('../package.json');
let WestraGif = `https://i.hizliresim.com/ZK6WZt.gif`

exports.run = (client, message) => {
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Logo Sistemi Yardım Menüsü`)
 .setDescription(`
 **g!man** \n-> Rastgele Erkek Gifi Atar.
 **g!woman** \n-> Rastgele Kadın Gifi Atar.
 **g!anime** \n-> Rastgele Anime Gifi Atar.
 **g!animal** \n-> Rastgele Hayvan Gifi Atar.
 **g!couple** \n-> Rastgele Sevgili Gifi Atar.
 **g!marvel** \n-> Rastgele Marvel Gifi Atar.
 **g!mka** \n-> Mustafa Kemal Atatürk Gifi Atar.
 **g!random** \n-> Random Fotoraf Atar.
 **g!random3** \n-> Random 3 Tane Fotoraf Atar.
 **g!randome** \n-> Random 3 Tane Emoji Atar.

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
  aliases: ["gif"],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'gifsistemi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'gifsistem'
};