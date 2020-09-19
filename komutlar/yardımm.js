const Discord = require('discord.js');
exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('YELLOW')
.setTitle('Viana Gif Komutları')
.setTimestamp()
.addField('<a:cal:743823689379741727>        |  .animal ','Rastgele hayvan gifleri atar')
.addField('<a:tekrar:743823491777953813>     |  .anime  ','Rastgele anime gifleri atar ')
.addField('<a:duraklat:743823493317263380>   |  .baby ','Rastgele bebek gifleri atar')
.addField('<a:devam:743823491995795486>      |  .couple  ', 'Rastgele sevgili gifleri atar')
.addField('<a:konay:743823493459738705>      |  .man   ','Rast gele erkek gifleri atar')
.addField('<a:sar:744242920688844921>        |  .woman  ', 'Rastgele kadın gifleri atar')
.addField('<a:hata:744254798076968971>       |  .yapımcım  ', 'Yapımcıları görürsün  ')
.addField('<a:hata:744254798076968971>       |  .kullanıcı  ', 'Kullanıcı komutları  ')
.addField('<a:konay:743823493459738705>      |  .gif   ','Özel anime gifleri atar')
.addField('<a:konay:743823493459738705>      |  .anime   ','Rastgele anime gifleri atar')




  







.setFooter(`Bu komut ${message.author.username} tarafından istendi!`, message.author.avatarURL)
.addField(`» Linkler`, `[Bot Davet Linki](https://discord.com/api/oauth2/authorize?client_id=725474753799913544&permissions=2048&scope=bot) **|** `)
        .setFooter(`Viana  | Bot Sürümü : 0.5.1 Beta | Varsayılan Prefix : .`, client.user.avatarURL)






.setTimestamp()
.setThumbnail("https://cdn.discordapp.com/attachments/694694493525377035/737036899612360774/a_0edcde786dca1aa7cb3caf12af732bc5.gif")
message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım'],
  permLevel: 0
};
//Madára#1967
exports.help = {
  name: "yardım",
  category: "Yardım",
  description: "Yardım kategorilerini gösteir."
};

  






