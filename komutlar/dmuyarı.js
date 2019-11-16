const Discord = require('discord.js')
const os = require('os')
var speedTest = require('speedtest-net');

exports.run = (client, message) => {
  var osType = os.type();

     message.channel.send(`🚄 | İnternet Hızınız Yükleniyor!`).then(m => m.delete(4000));
     message.channel.send(`⏳ | Pinginiz Hesaplanıyor!`).then(m => m.delete(4000));
     message.channel.send(`💮 | Host Aranıyor!`).then(m => m.delete(4000));
     message.channel.send(`🚀 | İşletim Sistemi Hesaplanıyor!`).then(m => m.delete(4000));
  
  if (osType === 'Darwin') osType = 'macOS'
  else if (osType === 'Windows') osType = 'Windows'
  else if (osType === 'Linux') osType = 'Linux'
  else if (osType === 'Ubuntu') osType = 'Ubuntu'
  else osType = os.type();
    var test = speedTest({maxTime: 5000});
    test.on('data', data => {
const embed = new Discord.RichEmbed()
 .setColor('#000000')
.setTitle('**İnternet Bilgilerin**')
.setDescription(`:arrow_down: İndirme: **${data.speeds.download} MB**     :arrow_up: Yükleme: **${data.speeds.upload} MB**\n \n:round_pushpin: Ping: **${client.ping}**\n \n:level_slider: İşletim Sistemi: **${osType}** \n \n:desktop: İnternet Sağlayıcısı: **${data.client.isp}** \n \n:file_cabinet: Host: **${data.server.host}**`)

  message.channel.send(embed)
});
 
    test.on('error', err => {
  console.log(err);
});
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["hız"],
  permLevel: 0,
  kategori: "sahip"
};

exports.help = {
  name: 'hız-test',
  description: 'internet hız testi yapar!',
  usage: 'hız'
};
 