const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 message.channel.send("**💫 Şanslı Sayını Buluyorum!**").then(message => {
   var espriler = ['Senin Şanslı Sayın 7⃣  ' ,'Senin Şanslı Sayın 1⃣ ' ,'Senin Şanslı Sayın 3⃣  ' ,'Senin Şanslı Sayın 9⃣ ' ,'Senin Şanslı Sayın 0⃣  ' ,'Senin Şanslı Sayın 1⃣ 6⃣ 5⃣ ' ,'Senin Şanslı Sayın 1⃣ 0⃣ 2⃣ ' ,'Senin Şanslı Sayın 1⃣ 0⃣ 6⃣ 9⃣ ' ,'Senin Şanslı Sayın 1⃣ 9⃣ 9⃣ ' ,'Senin Şanslı Sayın 5⃣ 3⃣ 0⃣   ' ,'Senin Şanslı Sayın 3⃣ 3⃣ 0⃣  '  ,'Senin Şanslı Sayın Yok 😔 '  ,'Senin Şanslı Sayın 4⃣ 1⃣ '  ,'Senin Şanslı Sayın 🔟 '];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['şanslısayım', 'şanslı-sayım', 'ş-s', 'sayımşanslılan','şs'],
  permLevel: 0
};

exports.help = {
  name: 'şanslısayım',
  description: 'Şanslı Sayınızı Bulmaya Çalışır',
  usage: 'Owner / Kod Paylaşım'
};  
 
 