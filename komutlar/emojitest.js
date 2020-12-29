const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {

       const emojiList = message.guild.emojis.cache.map((e, x) => (x + ' | ' + e)).join('\n');
      var emojis = message.guild.emojis.cache.array();
  
  let sayfalar = [`Emoji İD'lerini Görmek için 2.Sayfaya Geçiniz. \n \n ${message.guild.emojis.cache.map(e=>e.toString()).join(" ** - ** ") ? message.guild.emojis.cache.map(e=>e.toString()).join(" ** - ** ") : 'Bu sunucuda hiç emoji bulunmuyor.'}`,`\`${emojiList}\``]; 
  let sayfa = 1;

  const embed = new Discord.MessageEmbed()
  .setAuthor(`${message.guild.name} - Emojiler ve İD'leri`,message.guild.iconURL())
    .setColor("RANDOM")
    .setFooter(`Sayfa ${sayfa} - ${sayfalar.length}`)
    .setDescription(sayfalar[sayfa-1])

  message.channel.send(embed).then(msg => {

    msg.react('⏪').then( r => {
      msg.react('⏩')

      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter);
      const forwards = msg.createReactionCollector(forwardsFilter);

      backwards.on('collect', r => {
        if (sayfa === 1) return;
        sayfa--;
        embed.setDescription(sayfalar[sayfa-1]);
        embed.setFooter(`Sayfa ${sayfa} - ${sayfalar.length}`);
        msg.edit(embed)
      })

      forwards.on('collect', r => {
        if (sayfa === sayfalar.length) return;
        sayfa++;
        embed.setDescription(sayfalar[sayfa-1]);
        embed.setFooter(`Sayfa ${sayfa} - ${sayfalar.length}`);
        msg.edit(embed)
      })

    })

  })
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["emoji-liste","emoji-id","emojiid"],
  category: "admin",
  permLevel: 0
};

module.exports.help = {
  name: 'emojiler',
  description: 'Emojileri ve idlerini gösterir.',
  usage: 'emoji-id'
};