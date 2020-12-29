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

let m = client.users.cache.get(random)

let embed =  new Discord.MessageEmbed()
.setImage(m.avatarURL({dynamic:true,size:1024}))
.setFooter(`Sky ${m.id}`,m.avatarURL({dynamic:true}))
.setColor("RANDOM")
message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
exports.help = {
 name: 'random',
};