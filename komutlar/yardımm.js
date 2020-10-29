const Discord = require('discord.js');
exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Maiar Gif Komutları')
.setTimestamp()
.addField('-animal ','Rastgele hayvan gifleri atar')
.addField('-anime  ','Rastgele anime gifleri atar ')
.addField('-baby ','Rastgele bebek gifleri atar')
.addField('-couple  ', 'Rastgele sevgili gifleri atar')
.addField('-man   ','Rast gele erkek gifleri atar')
.addField('-woman  ', 'Rastgele kadın gifleri atar')
.addField('-yapımcım  ', 'Yapımcıları görürsün  ')
.addField('-gif   ','Özel anime gifleri atar')
.addField('-anime   ','Rastgele anime gifleri atar')




  







.setFooter(`Bu komut ${message.author.username} Tarafından İstendi!`, message.author.avatarURL)
.addField(`» Linkler`, `[Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=771482580553564181&permissions=8&scope=bot) **|** `)







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

  






