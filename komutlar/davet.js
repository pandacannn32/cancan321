const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
exports.run = (client, message) => {
  const WestraEmbed = new WestraDiscord.MessageEmbed();
  WestraEmbed.setColor(`RANDOM`)
//  WestraEmbed.setAuthor(`Random Bot'u davet ederek sunucunu yapılandır!`)
  WestraEmbed.setDescription(`Random Bot'u davet etmek için [buraya](https://discord.com/oauth2/authorize?client_id=775281276000141312&scope=bot&permissions=2056) tıkla!`)
  message.channel.send(WestraEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};