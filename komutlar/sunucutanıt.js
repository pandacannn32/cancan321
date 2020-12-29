const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const db = require("quick.db")
const DBL = require("dblapi.js");

exports.run = async function(client, message, args) {
  const prefix = (await db.fetch(`prefix_${message.guild.id}`)) || ayarlar.prefix;
  const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc2NTI5MTYyNDU4NjAxODg1NiIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA3MzU2NzI5fQ.BHfrY8KcRHClbjyLrvnpjEB4Hy9ZTGrmNModv60IN48', client) 

  const voted = await dbl.hasVoted(message.author.id);
  if (!voted) return message.channel.send(new Discord.MessageEmbed()
    .setTitle("<a:canreddet:783251802912194570> Başarısız!")
    .setColor("RED")  
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL)
    .setThumbnail(client.user.avatarURL)
    .setDescription("**Bu Komutu Kullana Bilmek için __Botumuza Oy__ Vermelisiniz!\nEğer Oy Verdiyseniz 2-5DK Arası __Bekleyin!__**")
    .addField("Oy Vermek için:", `<a:kral:734688899405971557> [Bana Tıkla! ](https://top.gg/bot/765291624586018856/vote) <a:kral:734688899405971557>`)
  );
  else {
   let channel = client.channels.cache.get("779017846628810792");
    let cse = db.get("sunucutanit."+message.guild.id);

    if (cse) return await message.reply("Bu Komutu 12 Saatte Bir Kullana Bilirsin!");
    else {
const asdf = await client.channels.cache.get(message.channel.id).createInvite() 
message.delete(); 

const embed = new Discord.MessageEmbed() 
.setTitle('<a:tik3:776148501364604939> Başarılı!') 
.setDescription(`> <a:candansss:786157560956583946> **Sunucunuz Başarıyla [Burda](https://discord.gg/dev) Tanıtıldı!**\n\n > <a:candansss:786157560956583946> 12 Saat Sonra Tekrar Tanıtabilirsin!`)         
.setFooter(message.guild.name, message.guild.iconURL())         
.setTimestamp() 
.setColor("RANDOM")
message.channel.send(embed)     
  
db.set("sunucutanit."+message.guild.id, { zaman: Date.now(), sure: 43200000})
const invite = new Discord.MessageEmbed() 
.setTitle('<a:canmavi:786143294362353715> Sunucu Tanıtıldı!') 
.setDescription(`
> ${message.author} Tarafından **( ${message.guild.name} )** Adlı Sunucu Tanıtıldı!

**Sunucu Bilgileri **

<a:cansagagit:786269916004614144> Sunucu Adı: **${message.guild.name}**
<a:cansagagit:786269916004614144> Sunucu Sahibi: **${message.guild.owner.user.tag}**
<a:cansagagit:786269916004614144> Üye Sayısı: **${message.guild.memberCount}**

**Sunucuyu Tanıtanın Bilgileri ↷**

<a:cansagagit:786269916004614144> İsmi: **${message.author.tag}**
<a:cansagagit:786269916004614144> ID: **${message.author.id}**

**Sunucuya Girmek İçin ↷**
<a:canmavi:786143294362353715> [Tıkla!](${asdf.url}) <a:canmavi:786143294362353715>
`)                 
.setFooter(message.guild.name, message.guild.iconURL()) 
.setTimestamp() 
.setColor("RANDOM")
channel.send(invite) 
    }
  }
};

exports.conf = { 
  enabled: true, 
  guildOnly: false, 
  aliases: ["sunucu-tanıt"], 
  permLevel: 0 
}; 
exports.help = { 
  name: 'sunucutanıt', 
  description: 'Sunucunuzu tanıtır.', 
  usage: 'sunucutanıt'
};