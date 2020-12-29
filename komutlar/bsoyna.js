
const Discord = require('discord.js')
const db = require('quick.db')

var shellygif = ['https://i.pinimg.com/originals/12/5a/cb/125acbbc0fdd00ee1c750a1367041636.jpg','https://i.pinimg.com/originals/b3/f1/fc/b3f1fc93f282584287db7978d6012eb7.png','https://pa1.narvii.com/7525/5b9ac5f06f1620b6c38504961bf3c178b1831783r1-590-500_00.gif'] /// gifleri arttıra bilirsiniz siz.
var primogif = ['gif1','gif2','gif3']
var leongif = ['gif1','gif2','gif3']
var lougif = ['gif1','gif2','gif3']
 exports.run = function(client, message, args) {

let shellyrandom = shellygif[Math.floor(Math.random() * shellygif.length)]
let primorandom = primogif[Math.floor(Math.random() * primogif.length)]
let leonrandom = leongif[Math.floor(Math.random() * leongif.length)]
let lourandom = lougif[Math.floor(Math.random() * lougif.length)]
let karakterler = args[0]
var kupaa = db.fetch(`kupa_${message.author.id}`) || 0

if(!karakterler) return message.channel.send("Oynamak İstediğin Karakteri Girmelisin!\nKarakterler: **shelly,primo,leon,lou**")

if(args[0] === "shelly"){
  let sıra = Math.round(Math.random() * 10)
  let kupa;
  if(sıra == 1) kupa = 10
  if(sıra == 2) kupa = 9 
  if(sıra == 3) kupa = 8
  if(sıra == 4) kupa = 7
  if(sıra == 5) kupa = 6
  if(sıra == 6) kupa = 5
  if(sıra == 7) kupa = 4
  if(sıra == 8) kupa = 3
  if(sıra == 9) kupa = 2
  if(sıra == 10) kupa = 1
  db.add(`kupa_${message.author.id}`,kupa)
  const kazanma = new Discord.MessageEmbed()
  .setTitle("Tebrikler Kazandın !")
  .addField("🏆 Kazandığın Kupa Sayısı:", kupa, true)
  .setColor(message.guild.me.displayColor)
  .addField("🏆 Şuanki Kupan", kupaa, true)
  message.channel.send(new Discord.MessageEmbed()
                      .setTitle("Brawl Stars")
                       .setColor(message.guild.me.displayColor)
                      .setImage(shellyrandom)
                      ).then((msg)=> {
  setTimeout(function(){
    msg.edit(kazanma);
  }, 4000)
}); 
}

else if(args[0] === "primo"){
  let sıra = Math.round(Math.random() * 10)
  let kupa;
  if(sıra == 1) kupa = 10
  if(sıra == 2) kupa = 9 
  if(sıra == 3) kupa = 8
  if(sıra == 4) kupa = 7
  if(sıra == 5) kupa = 6
  if(sıra == 6) kupa = 5
  if(sıra == 7) kupa = 4
  if(sıra == 8) kupa = 3
  if(sıra == 9) kupa = 2
  if(sıra == 10) kupa = 1
  db.add(`kupa_${message.author.id}`,kupa)
  const kazanma = new Discord.MessageEmbed()
  .setTitle("Tebrikler Kazandın !")
  .addField("🏆 Kazandığın Kupa Sayısı:", kupa, true)
  .setColor(message.guild.me.displayColor)
  .addField("🏆 Şuanki Kupan", kupaa, true)
  message.channel.send(new Discord.MessageEmbed()
                      .setTitle("Brawl Stars")
                       .setColor(message.guild.me.displayColor)
                      .setImage(primorandom)
                      ).then((msg)=> {
  setTimeout(function(){
    msg.edit(kazanma);
  }, 4000)
}); 
}
else if(args[0] === "leon"){
  let sıra = Math.round(Math.random() * 10)
  let kupa;
   if(sıra == 1) kupa = 10
  if(sıra == 2) kupa = 9 
  if(sıra == 3) kupa = 8
  if(sıra == 4) kupa = 7
  if(sıra == 5) kupa = 6
  if(sıra == 6) kupa = 5
  if(sıra == 7) kupa = 4
  if(sıra == 8) kupa = 3
  if(sıra == 9) kupa = 2
  if(sıra == 10) kupa = 1
  db.add(`kupa_${message.author.id}`,kupa)
  const kazanma = new Discord.MessageEmbed()
  .setTitle("Tebrikler Kazandın !")
  .addField("🏆 Kazandığın Kupa Sayısı:", kupa, true)
  .setColor(message.guild.me.displayColor)
  .addField("🏆 Şuanki Kupan", kupaa, true)
  message.channel.send(new Discord.MessageEmbed()
                      .setTitle("Brawl Stars")
                       .setColor(message.guild.me.displayColor)
                      .setImage(leonrandom)
                      ).then((msg)=> {
  setTimeout(function(){
    msg.edit(kazanma);
  }, 4000)
}); 
}
  else if(args[0] === "lou"){
     let sıra = Math.round(Math.random() * 10)
  let kupa;
  if(sıra == 1) kupa = 10
  if(sıra == 2) kupa = 9 
  if(sıra == 3) kupa = 8
  if(sıra == 4) kupa = 7
  if(sıra == 5) kupa = 6
  if(sıra == 6) kupa = 5
  if(sıra == 7) kupa = 4
  if(sıra == 8) kupa = 3
  if(sıra == 9) kupa = 2
  if(sıra == 10) kupa = 1
  db.add(`kupa_${message.author.id}`,kupa)
  const kazanma = new Discord.MessageEmbed()
  .setTitle("Tebrikler Kazandın !")
  .addField("🏆 Kazandığın Kupa Sayısı:", kupa, true)
  .setColor(message.guild.me.displayColor)
  .addField("🏆 Şuanki Kupan", kupaa, true)
  message.channel.send(new Discord.MessageEmbed()
                      .setTitle("Brawl Stars")
                       .setColor(message.guild.me.displayColor)
                      .setImage(lourandom)
                      ).then((msg)=> {
  setTimeout(function(){
    msg.edit(kazanma);
  }, 4000)
}); 
}else return message.channel.send("Doğru karakter girmelisin!\nKarakterler: **shelly,primo,leon,lou**")
   
};
////Fiber Botlist & Code #7.7K
exports.conf = {

  enabled: true,
  guildOnly: false,
  aliases: ['bs','brawl-stars','brawlstars'],
  permLevel: 0

};

exports.help = {

  name: 'bs-oyna',
  description: 'zSakura için yaptım ab',
  usage: 'bs oynarsınız'

}