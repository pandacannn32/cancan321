const Discord = require("discord.js")
const db = require("quick.db")

exports.run = (client, message, args) => {

    const Şikayet = args.slice(0).join(' ');
    if(!Şikayet) return message.channel.send("Bir Şikayet belirtmelisin. ")
       
  const embed = new Discord.MessageEmbed()
//.setTitle("Bana bir Şikayetde bulundular!")
  .addField("Belirtilen Şikayet:", Şikayet)
  .addField("Şikayet Belirten Kişi:", `Adı: **${message.author.tag}** - Etiketi: <@${message.author.id}> - ID: **${message.author.id}**`)
  //etColor("BLUE")
  .setFooter(client.user.username, client.user.avatarURL())
  .setThumbnail(message.author.avatarURL({format: "gif"}))
  message.channel.send(`Şikayetiniz başarıyla iletildi!`)
  client.channels.cache.get("775356154145800193").send(embed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: "şikayet",
    description: "Şikayet bildirirsiniz",
    usage: "Şikayet <Şikayet>"
}