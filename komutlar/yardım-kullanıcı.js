const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const packageconfig = require('../package.json');
let WestraPrefix = `g!`
let WestraGif = `https://i.hizliresim.com/ZK6WZt.gif`

exports.run = (client, message) => {
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(`RANDOM`)
 .setAuthor(`${client.user.username} | Kullanıcı Yardım Menüsü`)
 .setDescription(`
 **${WestraPrefix}davet** \n-> Botu davet edersiniz.
 **${WestraPrefix}sunucutanıt** \n-> Sunucunuz [Burda](https://discord.gg/database) tanıtılır.
 **${WestraPrefix}corona** \n-> Korona istatistiklerini gösterir.
 **${WestraPrefix}deprembilgi** \n-> Son 10 Depremi Gösterir.
 **${WestraPrefix}sor** \n-> Bota Soru Sorarsınız.
 **${WestraPrefix}pp** \n-> Etiketlediğiniz kişinin avatarını gösterir.
 **${WestraPrefix}random** \n-> Botun ekli olduğu sunuculardaki her hangi birinin avatarını atar.
 **${WestraPrefix}şikayet** \n-> Bota şikayet belirtirsiniz.
 **${WestraPrefix}öneri** \n-> Bota öneri belirtirsiniz.
 **${WestraPrefix}kullanıcıbilgi @kullanıcı** \n-> Kullanıcı bilgilerini gösterir.
 **${WestraPrefix}sunucubilgi** \n-> Sunucu bilgilerini gösterir.
 **${WestraPrefix}istatistik** \n-> Botun istatistiğini gösterir.
 **${WestraPrefix}yılbaşı** \n-> Yılbaşının kutlanmasına kaç gün kaç saat kaç dakika olduğunu gösterir.
 **${WestraPrefix}sonmesaj** \n-> Yazdığınız son mesajı gösterir.
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
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};