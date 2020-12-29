const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json");
const db = require("quick.db");
exports.run = async (stark, msg, args) => {

  await msg.channel.send(`Emoji Bağlantısı Gönderin. \nİşlemi iptal etmek içim \`iptal\` yazın.`)
  let b1 = await msg.channel.awaitMessages(x => x.author.id == msg.author.id, {max: 1, time: 30000})
  if (!b1.size) return msg.channel.send('Herhangi bir cevap vermediğiniz için iptal edildi.')
  let b = b1.first()
  if (b.content == 'iptal') return msg.channel.send('İşlem iptal edildi.')
  let url
  if (b.content.length > 0) url = b.content
  else if (b.attachments.first()) url = b.attachments.first().proxyURL
  else return msg.channel.send("Yanlış Gönderiyorsunuz Lütfen Bir Emoji Bağlantısı Gönderin.")

  await msg.channel.send(`Emojinin Adı Ne Olsun? \nİşlemi iptal etmek içim \`iptal\` yazın.`)
  let a1 = await msg.channel.awaitMessages(x => x.author.id == msg.author.id, {max: 1, time: 30000})
  if (!a1.size) return msg.channel.send('Herhangi bir cevap vermediğiniz için iptal edildi.')
  let a = a1.first()
  if (a.content == 'iptal') return msg.channel.send('İşlem iptal edildi.')
  let isim = a.content
  
  
  await msg.guild.emojis.create(url, "can"+isim)
     .then(emoji => {
const emojiyüklendi = new Discord.MessageEmbed()
.setTitle("<a:basarili:749532011483627541> Başarılı!")
.setDescription(`**__${emoji.name}__** Adlı Emoji Oluşturuldu!`)
.setFooter(msg.author.username, msg.author.avatarURL())
.addField("Emoji:",`${emoji}`)
.addField("Emoji ID",`${emoji.id}`)
.setColor("RANDOM")
.setThumbnail(`${emoji.url}`)
        return msg.channel.send(emojiyüklendi)
     }).catch((err) => {
         msg.channel.send(`:x: Hata \n ${err}`)
       })
  console.log(b.attachments)
  }


exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['emoji-oluştur','emojiyükle'],
    permLevel: 0
}

exports.help = {
    name: 'ec',
    description: 'emoji-yükle',
    usage: 'emoji-yükle'
}