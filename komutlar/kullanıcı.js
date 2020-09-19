const Discord = require('discord.js');
exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Chwas Gif Kullanıcı Komutları  ')
.setTimestamp()
.addField('<a:750076057679429656:756912470970335262>        |  .avatar ','Avatarını atar')
.addField('<a:750076057679429656:756912470970335262>     |  .i  ','Botun İstatiğini Atar ')
.addField('<a:750076057679429656:756912470970335262>  |  .ping  ', 'Botun pingini atar ')





  










.setTimestamp()
.setThumbnail("https://i.pinimg.com/originals/cb/23/f7/cb23f755db4d4223aef0f3153e9ec864.gif")
message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kullanıcı'],
  permLevel: 0
};
//Madára#1967
exports.help = {
  name: "kullanıcı",
  category: "kullanıcı",
  description: "Yardım kategorilerini gösteir."

};