const Discord = require("discord.js");

//【Maiar】Code★Botlist★Uptime AİTDİR!!!
//【Maiar】Code★Botlist★Uptime AİTDİR!!!
module.exports.run = async (bot, message, args) => {

//【Maiar】Code★Botlist★Uptime AİTDİR!!!

    let replies = ["https://cdn.discordapp.com/attachments/750120598889431095/756946444308709386/ATATURK.gif","https://cdn.discordapp.com/attachments/750120598889431095/756946362339164280/7b397c232e47a6281e219f0d2672fa8b.gif","https://cdn.discordapp.com/attachments/750120598889431095/756947089937924106/32890824be8818834aa9122d2611d140.gif","https://media.discordapp.net/attachments/704396564227031130/705431688615821321/tumblr_mi62qrmpue1s04h99o5_250.gif"];

//【Maiar】Code★Botlist★Uptime AİTDİR!!!

    let result = Math.floor((Math.random() * replies.length));

//【Maiar】Code★Botlist★Uptime AİTDİR!!!

    let gifembed = new Discord.RichEmbed()

        .setTitle("MKA Gif ;")

        .setColor("BLACK")

        .setFooter(`${message.author.tag} `, message.author.avatarURL)

        .setImage(replies[result]);
//【Maiar】Code★Botlist★Uptime AİTDİR!!!


    message.channel.send(gifembed);

};

//【Maiar】Code★Botlist★Uptime AİTDİR!!!

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['atatürk','m','mustafakemalatatürk','kemal'],

  permLevel: 0

};



exports.help = {

  name: 'mka',

  description: 'Rastgele gif atar.',

  usage: 'mka'

};//【Maiar】Code★Botlist★Uptime AİTDİR!!!