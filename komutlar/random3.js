const Discord = require('discord.js');
exports.run = (client, message, args) => {
let array= []

client.users.cache.forEach(async member => {
    if(member.displayAvatarURL({dynamic:true}).endsWith(".gif")){
        array.push(member.id)
    }else{

    }
})

let random = array[Math.floor(Math.random() * array.length)]
let random2 = array[Math.floor(Math.random() * array.length)]
let random3 = array[Math.floor(Math.random() * array.length)]
let m = client.users.cache.get(random2)
let y = client.users.cache.get(random3)

let z = client.users.cache.get(random)

let embed =  new Discord.MessageEmbed()
.setImage(m.avatarURL({dynamic:true,size:2048}))
.setFooter(`Sky ${m.id}`,m.avatarURL({dynamic:true}))
.setColor("RANDOM")
message.channel.send(embed)
let embed2 = new Discord.MessageEmbed()
.setImage(y.avatarURL({dynamic:true,size:2048}))
.setFooter(`Sky ${y.id}`,y.avatarURL({dynamic:true}))
.setColor("RANDOM")
message.channel.send(embed2)
let embed3 = new Discord.MessageEmbed()
.setImage(z.avatarURL({dynamic:true,size:2048}))
.setFooter(`Sky ${z.id}`,z.avatarURL({dynamic:true}))
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
 name: 'random3'
 };