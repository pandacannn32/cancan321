const Discord = require("discord.js");
const client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async(client, message, args) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");

    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('İstatistik')
    .addField(':gear: Gecikme  ', client.ping + 'ms')
    .addField(':axe: Çalışma Süresi  ', `${duration}`)
    .addField(':busts_in_silhouette: Kullanıcılar ', client.guilds.reduce((a, b) => a + b.memberCount, 0))
    .addField(':scales: Kanallar ', client.channels.size)
    .addField(':clipboard: Sunucular ', client.guilds.size)
    .addField(':satellite: Bellek kullanımı ', (process.memoryUsage().heapUsed / 2048 / 2048).toFixed(2))
    .addField(':shield: Kütüphanesi ', `Discord.js`)
    .addField(`:ribbon: Discord.js sürümü `, Discord.version)
      .addField(':shopping_cart:  Yapımcım ', ' <@713678882011742230> Ve <@640250146453454848>')
      .addField(':paperclip: Botun Başlanma Zamanı:', "Bot **30.10.2020**'de Yapılmaya Başlanmıştır.")
    .setFooter('Maiar Gif', client.user.avatarURL)
    .setTimestamp()
    message.channel.send(embed);
}
exports.conf = {
  enabled: true,
    guildOnly: true,
  aliases: ['istatistik', 'boti', 'bot-i','i'],
  permLevel: 0
};

exports.help = {
  name: 'bilgi-bot',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'istatistik [bot durumunu yazar]'
};