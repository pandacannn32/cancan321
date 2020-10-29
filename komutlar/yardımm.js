const Discord = require('discord.js');
exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('Yellow')
.setTitle('Chwas Gif Komutları')
.setTimestamp()
.addField('<a:750076062716788807:756912478902026326>        |  .animal ','Rastgele hayvan gifleri atar')
.addField('<a:750076071721828452:756912488112455762>        |  .anime  ','Rastgele anime gifleri atar ')
.addField('<:pxel_kalp:756912655519711312>        |  .baby ','Rastgele bebek gifleri atar')
.addField('<a:ats:756912744116125788>        |  .couple  ', 'Rastgele sevgili gifleri atar')
.addField('<a:750076057679429656:756912470970335262>        |  .man   ','Rast gele erkek gifleri atar')
.addField('<a:714606187261198450:756917847627661420>        |  .woman  ', 'Rastgele kadın gifleri atar')
.addField('<a:TAC:756912721059905587>        |  .yapımcım  ', 'Yapımcıları görürsün  ')
.addField('<a:yesl:756917598976999474>      |  .gif   ','Özel anime gifleri atar')
.addField('<a:gk:756917851776090263>      |  .anime   ','Rastgele anime gifleri atar')




  







.setFooter(`Bu komut ${message.author.username} tarafından istendi!`, message.author.avatarURL)
.addField(`» Linkler`, `[Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=756892207776006236&permissions=2048&scope=bot) **|** `)
        .setFooter(`Chwas | Bot Sürümü : 0.5.1 Beta | Varsayılan Prefix : .`, client.user.avatarURL)






.setTimestamp()
.setThumbnail("https://cdn.discordapp.com/emojis/699729035336482887.gif?v=1")
message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['y','help','Yardım','Help','yardim','Yardim','HELP','YARDIM'],
  permLevel: 0
};
//Madára#1967
exports.help = {
  name: "yardım",
  category: "Yardım",
  description: "Yardım kategorilerini gösteir."
};

  






