const discord = require("discord.js");
exports.run = async (client, message, args) => {
const colors = ['RED','GREED','BLUE','YELLOW','BLACK','WHITE','ORANGE','PURPLE','BROWN','PINK','GRAY'];
    const embedcolor = Math.floor(Math.random() * colors.length);
    const image = ["https://picsum.photos/"];
    const number = Math.floor(Math.random() * 1025);
    const images = `${image}${number}`
   message.channel.send(new discord.MessageEmbed()
            .setImage(`${images}`)
            .setColor(`${colors[embedcolor]}`)
            .setTitle(`__IMAGE 🖼️__: **RANDOM**\n__EMBED 🎨__: **RANDOM**\n__SIZE 🖥️__: **RANDOM**`)
            .setFooter(`© ️Sky :)`))
}

exports.conf = {
    enabled:false,
    guildOnly: false,
    aliases: ["randomp","randomphoto","randompp"],
    permLevel: 0,
}

exports.help = {
    name: 'a', 
    description: '',
    usage: ''
}