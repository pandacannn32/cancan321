const Discord = require("discord.js");
const client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async(client, message, args) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");

    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('<a:sar:744242920688844921> 📊 İstatistik;<a:sar:744242920688844921> ')
    .addField('<a:sar:744242920688844921> ⏲️ Gecikme<a:sar:744242920688844921>  ', client.ping + 'ms')
    .addField('<a:sar:744242920688844921> 👷 Çalışma Süresi <a:sar:744242920688844921> ', `${duration}`)
    .addField('<a:sar:744242920688844921> 👥 Kullanıcılar<a:sar:744242920688844921> ', client.guilds.reduce((a, b) => a + b.memberCount, 0))
    .addField('<a:sar:744242920688844921> 📺 Kanallar<a:sar:744242920688844921> ', client.channels.size)
    .addField('<a:sar:744242920688844921> 📋 Sunucular<a:sar:744242920688844921> ', client.guilds.size)
    .addField('<a:sar:744242920688844921> 🖥️ Bellek kullanımı<a:sar:744242920688844921> ', (process.memoryUsage().heapUsed / 2048 / 2048).toFixed(2))
    .addField('<a:sar:744242920688844921> 📖 Kütüphanesi<a:sar:744242920688844921> ', `Discord.js`)
    .addField(`<a:sar:744242920688844921> Discord.js sürümü<a:sar:744242920688844921> `, Discord.version)
      .addField('<a:sar:744242920688844921> 🕵️ Yapımcım<a:sar:744242920688844921> ', ' <@729285831751368744>   <@610958977685258242> ')
      .addField('<a:sar:744242920688844921>  Botun Başlanma Zamanı:', "Bot **2.07.2020**'de yapılmaya başlanmıştır<a:sar:744242920688844921> ")
    .setFooter('Viana Gif', client.user.avatarURL)
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