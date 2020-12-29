const Discord = require('discord.js');
exports.run = (client, message, args) => {
let array= []

client.emojis.cache.forEach(async emojis => {
    if(emojis.url){
        array.push(emojis.url)
    }else{

    }
})

let random = array[Math.floor(Math.random() * array.length)]
let random2 = array[Math.floor(Math.random() * array.length)]
let random3 = array[Math.floor(Math.random() * array.length)]
let m = random
let y = random2

let z = random3

let embed =  new Discord.MessageEmbed()
.setImage(m)
.setColor("RANDOM")
message.channel.send(embed)
let embed2 = new Discord.MessageEmbed()
.setImage(y)
.setColor("RANDOM")
message.channel.send(embed2)
let embed3 = new Discord.MessageEmbed()
.setImage(z)
.setColor("RANDOM")
message.channel.send(embed3)

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
exports.help = {
 name: 'randome'
 };