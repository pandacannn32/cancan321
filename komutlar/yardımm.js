const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')
exports.run = (client, message, args, member) => {
const yardım = new Discord.MessageEmbed()
  .setAuthor(`Sky Yardım Menüsü`, client.user.avatarURL())
  .setColor("RANDOM")
  .setThumbnail(client.user.avatarURL())
  .setDescription(`• Merhaba! <@${message.author.id}> beni kullandığın için teşekkür ederim!`)
  .addField(" • Kategoriler:", `> • [g!kullanıcı](https://discord.gg/dev): **Kullanıcı yardım menüsünü gösterir.**\n > • [g!eğlence](https://discord.gg/dev): **Eğlence yardım menüsünü gösterir.**\n > • [g!logo](https://discord.gg/dev): ** Logo sistemi yardım menüsünü gösterir.**\n > • [g!gif](https://discord.gg/dev): ** Gif Menüsünü gösterir.**\n > • [g!yapımcım](https://discord.gg/dev): **Yapımcım'ı gösterir. **\n > • [g!say](https://discord.gg/dev): **Say Sistemini gösterir. **\n`)
  .addField(" • Güncellemeler:", `> • **Güncelleme : v0.2**\n > •İnstagram kodu Eklendi g!instagram\n > • Deprem Bilgi Eklendi g!depremler`)
  .addField(" • Linkler:", "• [Davet Et](https://discord.com/oauth2/authorize?client_id=775281276000141312&scope=bot&permissions=2056) • [Destek Sunucusu](https://discord.gg/dev) • [Web Site](Yakında) • ")
.setImage("https://i.hizliresim.com/ZK6WZt.gif")
.setFooter("Sky", message.author.avatarURL())
.setTimestamp()
  message.channel.send(yardım)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["y", "help", "h"],
    permLevel: 0
}

exports.help = {
    name: "yardım",
    description: "westra",
    usage: "westra"
}