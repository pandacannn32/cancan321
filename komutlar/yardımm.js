const Discord = require('discord.js');//【Maiar】Code★Botlist★Uptime AİTDİR!!!
exports.run = function(client, message) {//【Maiar】Code★Botlist★Uptime AİTDİR!!!
const embed = new Discord.RichEmbed()//【Maiar】Code★Botlist★Uptime AİTDİR!!!
.setColor('RANDOM')//【Maiar】Code★Botlist★Uptime AİTDİR!!!
.setTitle('Maiar Gif Komutları')//【Maiar】Code★Botlist★Uptime AİTDİR!!!
.setTimestamp()//【Maiar】Code★Botlist★Uptime AİTDİR!!!
.addField('-animal ','Rastgele hayvan gifleri atar')//【Maiar】Code★Botlist★Uptime AİTDİR!!!
.addField('-anime  ','Rastgele anime gifleri atar ')//【Maiar】Code★Botlist★Uptime AİTDİR!!!
.addField('-baby ','Rastgele bebek gifleri atar')//【Maiar】Code★Botlist★Uptime AİTDİR!!!
.addField('-couple  ', 'Rastgele sevgili gifleri atar')//【Maiar】Code★Botlist★Uptime AİTDİR!!!
.addField('-man   ','Rast gele erkek gifleri atar')//【Maiar】Code★Botlist★Uptime AİTDİR!!!
.addField('-woman  ', 'Rastgele kadın gifleri atar')//【Maiar】Code★Botlist★Uptime AİTDİR!!!
.addField('-yapımcım  ', 'Yapımcıları görürsün  ')//【Maiar】Code★Botlist★Uptime AİTDİR!!!
.addField('-gif   ','Özel anime gifleri atar')//【Maiar】Code★Botlist★Uptime AİTDİR!!!
.addField('-anime   ','Rastgele anime gifleri atar')//【Maiar】Code★Botlist★Uptime AİTDİR!!!
//【Maiar】Code★Botlist★Uptime AİTDİR!!!
//【Maiar】Code★Botlist★Uptime AİTDİR!!!
//【Maiar】Code★Botlist★Uptime AİTDİR!!!
//【Maiar】Code★Botlist★Uptime AİTDİR!!!
  //【Maiar】Code★Botlist★Uptime AİTDİR!!!
//【Maiar】Code★Botlist★Uptime AİTDİR!!!
//【Maiar】Code★Botlist★Uptime AİTDİR!!!
//【Maiar】Code★Botlist★Uptime AİTDİR!!!
//【Maiar】Code★Botlist★Uptime AİTDİR!!!
//【Maiar】Code★Botlist★Uptime AİTDİR!!!
//【Maiar】Code★Botlist★Uptime AİTDİR!!!
//【Maiar】Code★Botlist★Uptime AİTDİR!!!
.setFooter(`Bu komut ${message.author.username} Tarafından İstendi!`, message.author.avatarURL)
.addField(`» Linkler`, `[Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=771482580553564181&permissions=8&scope=bot) **|** `)
//【Maiar】Code★Botlist★Uptime AİTDİR!!!
//【Maiar】Code★Botlist★Uptime AİTDİR!!!
//【Maiar】Code★Botlist★Uptime AİTDİR!!!
//【Maiar】Code★Botlist★Uptime AİTDİR!!!
//【Maiar】Code★Botlist★Uptime AİTDİR!!!
//【Maiar】Code★Botlist★Uptime AİTDİR!!!
//【Maiar】Code★Botlist★Uptime AİTDİR!!!
.setTimestamp()
.setThumbnail("https://cdn.discordapp.com/emojis/699729035336482887.gif?v=1")
message.channel.send(embed)
};//【Maiar】Code★Botlist★Uptime AİTDİR!!!
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['y','help','Yardım','Help','yardim','Yardim','HELP','YARDIM'],
  permLevel: 0
};
//【Maiar】Code★Botlist★Uptime AİTDİR!!!
exports.help = {
  name: "yardım",
  category: "Yardım",
  description: "Yardım kategorilerini gösteir."
};

  






