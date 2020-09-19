const Discord = require("discord.js");
const client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async(client, message, args) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");

    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('<a:750076062716788807:756912478902026326> İstatistik;')
    .addField('<a:750076062716788807:756912478902026326> Gecikme  ', client.ping + 'ms')
    .addField('<a:750076062716788807:756912478902026326> Çalışma Süresi  ', `${duration}`)
    .addField('<a:750076062716788807:756912478902026326> Kullanıcılar ', client.guilds.reduce((a, b) => a + b.memberCount, 0))
    .addField('<a:750076062716788807:756912478902026326> Kanallar ', client.channels.size)
    .addField('<a:750076062716788807:756912478902026326> Sunucular ', client.guilds.size)
    .addField('<a:750076062716788807:756912478902026326> Bellek kullanımı ', (process.memoryUsage().heapUsed / 2048 / 2048).toFixed(2))
    .addField('<a:750076062716788807:756912478902026326> Kütüphanesi ', `Discord.js`)
    .addField(`<a:750076062716788807:756912478902026326> Discord.js sürümü `, Discord.version)
      .addField('<a:750076062716788807:756912478902026326> Yapımcım ', ' <@630476128804536397>  ')
      .addField('<a:750076062716788807:756912478902026326>  Botun Başlanma Zamanı:', "Bot **19.09.2020**'de yapılmaya başlanmıştır.")
    .setFooter('Chwas Gif', client.user.avatarURL)
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