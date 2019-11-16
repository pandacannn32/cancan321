const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async (client, message, params, args) => {

  const ysm = new Discord.RichEmbed()
  .setColor(38201)
      .setAuthor(`Yapımcı Bilgileri`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .addField(" YouTube : ", `[TIKLA](https://youtube.com)`)    
      .addField(" İnstagram : ", `[TIKLA](https://instagram.com)`)  
  .setFooter(`${message.author.username} Tarafından İstendi!`, message.author.avatarURL)
  return message.channel.sendEmbed(ysm);

};


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["yapımcı"],
    permLevel: 0
  };

  exports.help = {
    name: 'sosyalmedya',
    description: 'sosyalmedya',
    usage: 'sosyalmedya'
  };