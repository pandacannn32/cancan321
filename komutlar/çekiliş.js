const Discord = require('discord.js');
const moment = require('moment');
const ms = require('ms')

exports.run = async (client, message) => {
var time = moment().format('Do MMMM YYYY , hh:mm');
var room;
var title;
var duration;
var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
done = currentTime.getMinutes() + duration,
seconds = currentTime.getSeconds();
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
var filter = m => m.author.id === message.author.id;
 
  
  
      message.channel.send(`🔱 | **Çekilişin Yapılacağı Kanalın Adını Yaz**`).then(msg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name' , collected.first().content);
        if(!room) return message.channel.send('❌ | **Geçersiz Kanal İsmi! \`UYARI: Lütfen Kanalı Etiketlemeyin Baştaki "#" İşaretini Siliniz!\` **');
        room = collected.first().content;
        collected.first().delete();
        msg.edit('⏰ | **Çekiliş Süresini Belirle! (1s, 1m, 1h, 1d)**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(!collected.first().content.match(/[1-60][s,m,h,d,w]/g)) return message.channel.send('❌ | **Geçersiz Süre!**');
            duration = collected.first().content
            collected.first().delete();
            msg.edit('🎁 | **Lütfen Vereceğin Hediyeyi Yaz!**').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                msg.delete();
                message.delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setColor("GREEN")
                  .setTitle("🎁 ÇEKİLİŞ BAŞLADI 🎁")
                  .setDescription(`**${title}** \n🎉 Basarak Katıl \nKalan Süre : ${duration} \n**Başlama Zamanı :** ${hours}:${minutes}:${seconds} ${suffix}`)
                  message.guild.channels.find("name" , room).send('' , {embed: giveEmbed}).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users
                       let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0]
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .setColor("BLUE")
                       .addField('Çekiliş Bitti 🎉',`Kazanan : ${gFilter}`)
                       .setTimestamp()
                     m.edit('' , {embed: endEmbed});
                       
                       var embedLel = new Discord.RichEmbed()
                        .setColor("BLUE")
                       .setTitle("🎉 ÇEKİLİŞ BİTTİ 🎉")
                        .setDescription(`**Tebrikler ${gFilter} ${title} Kazandın!**`)
                       .setFooter("Çekiliş Sistemi")
                    message.guild.channels.find("name" , room).send(`` , embedLel)
                }, ms(duration));
            });
                } catch(e) {
                message.channel.send(`⚠ **HATA** ⚠\nBu İşleme Devam Ede Bilmek için Yetkilerimi Kontrol Et!`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'çekiliş',
  description: 'Çekiliş mi? Sunucunda güzel şeyler olacak :3',
  usage: 'çekiliş'
};